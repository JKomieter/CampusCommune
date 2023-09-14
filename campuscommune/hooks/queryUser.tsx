import { db } from "@/firebase/config";
import { currentUserType } from "@/types";
import { user } from "@nextui-org/react";
import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";



const queryUser = (user_name: string) => {
    const [user, setUser] = useState<currentUserType>({} as currentUserType);

    const usersCollectionRef = collection(db, "user");

    useEffect(() => {
        const username = user_name as string;
        const full_name = username.split("-").join(" ")

        const getCurrentUser = async () => {
            const userRef = query(usersCollectionRef, where("full_name", "==", full_name || ""));
            const querySnapshot = await getDocs(userRef);
            setUser(querySnapshot.docs.map((doc) => doc.data())[0] as currentUserType);
        };

        getCurrentUser();
    }, [user]);

    return { user };
};


export default queryUser;
