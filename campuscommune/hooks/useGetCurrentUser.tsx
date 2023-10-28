import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/config";
import { currentUserType } from "@/types";
import { collection, getDocs, query, where } from "firebase/firestore";

// This hook is used to get the current user's data from the database
const useGetCurrentUser = () => {
    const [user] = useAuthState(auth);
    const [currentUser, setCurrentUser] = React.useState<currentUserType>({} as currentUserType);
    const usersCollectionRef = collection(db, "user");

    
    useEffect(() => {
        console.log(user?.email)
        const getCurrentUser = async () => {
            const userRef = query(usersCollectionRef, where("email", "==", user?.email || ""));
            const querySnapshot = await getDocs(userRef);
            setCurrentUser(querySnapshot.docs.map((doc) => doc.data())[0] as currentUserType);
        };

        getCurrentUser();
    }, [user]);
    
    return { currentUser };
}

export default useGetCurrentUser;