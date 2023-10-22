import { db } from "@/firebase/config";
import { currentUserType } from "@/types";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";



const queryUser = (user_name: string) => {
    const [user, setUser] = useState<currentUserType>({} as currentUserType);

    const usersCollectionRef = collection(db, "user");

    useEffect(() => {
        const getCurrentUser = async () => {
            const username = user_name as string;
            const full_name = username.split("-").join(" ");
            if (full_name.length > 0) {
                const userRef = query(usersCollectionRef, where("full_name", "==", full_name || ""));
                const querySnapshot = await getDocs(userRef);
                setUser(querySnapshot.docs.map((doc) => doc.data())[0] as currentUserType);
            }
        };
        if (user_name?.length > 0) getCurrentUser();
    }, [user_name]);

    return { user };
};


export default queryUser;
