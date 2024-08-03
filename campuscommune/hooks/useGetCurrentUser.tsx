import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/config";
import { currentUserType } from "@/types";
import { collection, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";


const useGetCurrentUser = () => {
    const [user] = useAuthState(auth);
    const [currentUser, setCurrentUser] = React.useState<currentUserType>({} as currentUserType);
    const usersCollectionRef = collection(db, "user");
    
    useEffect(() => {
        const getCurrentUser = async () => {
            if (!user) return;
            const userRef = query(usersCollectionRef, where("email", "==", user?.email || ""));
            const querySnapshot = await getDocs(userRef);
            setCurrentUser(querySnapshot.docs.map((doc) => doc.data())[0] as currentUserType);
        };

        getCurrentUser();
    }, [user]);
    
    return { currentUser };
}

export default useGetCurrentUser;