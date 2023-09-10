"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiMessageSquare, FiSearch } from "react-icons/fi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/config";
import { useEffect, useState } from "react";
import { currentUserType } from "@/types";
import { query, where, getDocs, collection } from "firebase/firestore";
import { IoIosArrowDown } from "react-icons/io";
import { LuMessageSquarePlus } from "react-icons/lu";
import { useDiscussionSidebarStore } from "@/store/useDiscussionSidebarStore";


const DiscussionHeader = () => {
    const [currentUser, setCurrentUser] = useState<currentUserType | null>(null);
    const [user] = useAuthState(auth);
    const usersCollectionRef = collection(db, "user");
    const { isSidebarOpen, toggleSidebar } = useDiscussionSidebarStore();


    useEffect(() => {
        const getCurrentUser = async () => {
            const userRef = query(usersCollectionRef, where("email", "==", user?.email || ""));
            const querySnapshot = await getDocs(userRef);
            setCurrentUser(querySnapshot.docs.map((doc) => doc.data())[0] as currentUserType);
        };

        getCurrentUser();
    }, [user]);

    return (
        <div className="flex w-full items-center justify-between gap-6 mt-16 lg:px-36 md:px-16 sm:px-12 px-3 py-2">
            <span onClick={() => toggleSidebar(true)} className="lg:hidden flex w-full">
                <GiHamburgerMenu size={24}/>
            </span>
            <div className="flex flex-row gap-2 items-center cursor-pointer justify-center">
                <span onClick={() => toggleSidebar(true)} className="hidden lg:flex w-full">
                    <GiHamburgerMenu size={25} />
                </span>
                <span className="md:text-lg font-semibold">Comm<span className="text-[#FF725E] md:text-xl text-lg">X</span></span>
            </div>
            <span className="lg:hidden flex w-full justify-end">
                <FiSearch size={24} className="text-neutral-400 " />
            </span>  
            <div
                className="lg:flex hidden flex-row py-2 min-w-[380px] w-full gap-1 items-center"
            >
                <FiSearch size={24} className="text-neutral-400" />
                <input
                    type="text"
                    placeholder="Search discussions"
                    className="w-full outline-none bg-transparent text-neutral-800"
                />
            </div>
            <div className="lg:flex hidden flex-row items-center justify-end gap-2 cursor-pointer hover:text-[#FF725E] w-full">
                <h3 className="hover:text-neutral-600 text-neutral-600 text-sm xl:flex hidden">
                    Latest Topics
                </h3>
                <GiHamburgerMenu size={25} />
            </div>
            <div className="lg:flex hidden flex-row items-center gap-2 text-neutral-600 justify-center">
                <p className="lowercase">
                    {currentUser?.username}
                </p>
                <IoIosArrowDown size={20} />
            </div>
            <div className="w-full text-right lg:flex hidden gap-1 items-center justify-end cursor-pointer ">
                <LuMessageSquarePlus size={29}  />
                <p className="text-neutral-600 text-sm xl:flex hidden">
                    Start a discussion
                </p>
            </div>
        </div>
    )
}

export default DiscussionHeader;