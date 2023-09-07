"use client";
import DiscussionSidebar from "@/components/Discussion/[DiscussionTitle]/DiscussionSidebar";
import { db, auth } from "@/firebase/config";
import { DiscussionType, currentUserType } from "@/types";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Discussion() {
    const params = useParams();
    const [currentUserDiscussions, setCurrentUserDiscussions] = useState<DiscussionType[]>([] as DiscussionType[]);
    const discussionsCollectionRef = collection(db, "discussions");
    const usersCollectionRef = collection(db, "user");
    const [currentUser, setCurrentUser] = useState<currentUserType>({} as currentUserType);
    const [user] = useAuthState(auth);


    useEffect(() => {
        // get current user and current user discussions
        const getCurrentUser = async () => {
            const userRef = query(usersCollectionRef, where("email", "==", user?.email || ""));
            const querySnapshot = await getDocs(userRef);
            setCurrentUser(querySnapshot.docs.map((doc) => doc.data())[0] as currentUserType);
        }
        const getUserDiscussions = async () => {
            const userDiscussionsRef = query(discussionsCollectionRef, where("participants", "array-contains", user?.email));
            const querySnapshot = await getDocs(userDiscussionsRef);
            setCurrentUserDiscussions(querySnapshot.docs.map((doc) => doc.data()) as DiscussionType[]);
        }


        getCurrentUser();
        console.log(currentUser);
        getUserDiscussions();

    }, []);


    useEffect(() => {
        const discussion_title = params.discussion_title as string;
        const full_title = discussion_title.split("%20").join(" ");


    }, []);


    return (
        <div className="w-full lg:px-36 md:px-16 sm:px-12 px-3">
            <DiscussionSidebar
                currentUserDiscussions={currentUserDiscussions}
            />
        </div>
    )
}