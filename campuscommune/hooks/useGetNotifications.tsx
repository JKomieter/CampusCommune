import { NotificationType } from "@/types";
import { useEffect, useState } from "react";
import useGetCurrentUser from "./useGetCurrentUser";
import { auth, db } from "@/firebase/config";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";


export const useGetNotifications = () => {
    const [ user ] = useAuthState(auth);
    const [notifications, setNotifications] = useState<NotificationType[]>([]);
    const notificationsCollectionRef = collection(db, "notifications");


    const getAllNotifications = async () => {
        if (user) {
            const queryNotifications = query(
                notificationsCollectionRef,
                where("recipient_email", "==", user?.email || ""),
                where("seen", "==", false),
                // orderBy("created_at", "desc")
            );

            const querySnapshot = await getDocs(queryNotifications);
            const notificationsData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as NotificationType[] ;

            setNotifications(notificationsData);
        }
    };

    useEffect(() => {
        getAllNotifications();
    }, [user]);
  

    return [ notifications ];
};


