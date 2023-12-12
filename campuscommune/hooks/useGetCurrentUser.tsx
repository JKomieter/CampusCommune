import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/config";
import { currentUserType } from "@/types";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";

// This hook is used to get the current user's data from the database
const useGetCurrentUser = () => {
    const [user] = useAuthState(auth);
    const [currentUser, setCurrentUser] = React.useState<currentUserType>({} as currentUserType);
    const usersCollectionRef = collection(db, "user");
    const router = useRouter();

    
    useEffect(() => {
        const getCurrentUser = async () => {
            const userRef = query(usersCollectionRef, where("email", "==", user?.email || ""));
            const querySnapshot = await getDocs(userRef);
            setCurrentUser(querySnapshot.docs.map((doc) => doc.data())[0] as currentUserType);
        };

        getCurrentUser();
    }, [user]);


    useEffect(() => {
        // listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push("/auth/signin");
            }
        });

        return () => {
            unsubscribe();
        }
    }, []);
    
    return { currentUser };
}

export default useGetCurrentUser;