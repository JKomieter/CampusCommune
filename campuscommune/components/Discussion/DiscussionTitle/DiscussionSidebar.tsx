"use client";
import React, { useEffect, useState } from "react";
import { DiscussionType, currentUserType } from "@/types";
import DiscussionSidebarItem from "./DiscussionSidebarItem";
import { IoClose } from "react-icons/io5";
import { db, auth } from "@/firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { motion } from "framer-motion";
import { useDiscussionSidebarStore } from "@/store/useDiscussionSidebarStore";


const DiscussionSidebar = () => {
    const [currentUserDiscussions, setCurrentUserDiscussions] = useState<DiscussionType[]>([] as DiscussionType[]);
    const discussionsCollectionRef = collection(db, "discussions");
    const usersCollectionRef = collection(db, "user");
    const [currentUser, setCurrentUser] = useState<currentUserType>({} as currentUserType);
    const [user] = useAuthState(auth);
    const { isSidebarOpen, toggleSidebar } = useDiscussionSidebarStore();


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
        getUserDiscussions();

    }, []);


    return (
        <motion.aside
            animate={{ x: isSidebarOpen ? 0 : -1000 }}
            transition={{ duration: 0.5 }}
            id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 mt-14">
                <div className="mb-6 flex flex-row items-center justify-between">
                    <span className="text-lg font-semibold p-2  text-neutral-700 dark:text-white">Your Discussions</span>
                    <span onClick={() => toggleSidebar(false)} className="rounded-full p-2 bg-slate-100 hover:bg-slate-300 cursor-pointer">
                        <IoClose size={22} className="text-neutral-700" />
                    </span>
                </div>
                <div className="space-y-2">
                    {
                        currentUserDiscussions.map((discussion, index) => (
                            <DiscussionSidebarItem
                                discussion={discussion}
                                key={discussion.title} 
                                index={index++}                            
                            />  
                        ))
                    }
                </div>
            </div>
        </motion.aside>
    )
}

export default DiscussionSidebar;