"use client";
import { AiOutlinePlus } from "react-icons/ai";
import { BiGroup, BiLogOut } from "react-icons/bi";
import { FaChalkboardTeacher, FaRegListAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { RiDiscussLine, RiHome2Line } from "react-icons/ri";
import { motion } from "framer-motion"
import { useSidebarStore } from "@/store/useSidebarStore";
import { usePathname } from "next/navigation";
import React from "react";


const SideBar = () => {
    const items = [
        {
            name: "Dashboard",
            icon: RiHome2Line,
            link: "/",
        },
        {
            name: "Home",
            icon: RiHome2Line,
            link: "/",
        },
        {
            name: "Following",
            icon: FaRegListAlt,
            link: "/",
        },
        {
            name: "Answer",
            icon: FaRegPenToSquare,
            link: "/",
        },
        {
            name: "Spaces",
            icon: BiGroup,
            link: "/",
        },
        {
            name: "Sign out",
            icon: BiLogOut,
            link: "/",
        },
        {
            name: "Create space",
            icon: AiOutlinePlus,
            link: "/",
        },
        {
            name: "Share notes",
            icon: GrNotes,
            link: "/",
        },
        {
            name: "Join discussions",
            icon: RiDiscussLine,
            link: "/join-discussion",
        },
        {
            name: "Explore courses",
            icon: MdOutlineExplore,
            link: "/",
        },
        {
            name: "Find tutors",
            icon: FaChalkboardTeacher,
            link: "/",
        },
    ]

    const { isSidebarOpen } = useSidebarStore();
    const pathname = usePathname() as string;

    if (pathname.includes("auth")) return null;

    return (
        <motion.aside 
        animate={{ x: isSidebarOpen ? 0 : -1000 }}
        transition={{ duration: 0.5 }}
        id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen ">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium flex flex-col gap-4">
                    {
                        items.map((item) => (
                            <li key={item.name}>
                                <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group gap-1">
                                    <item.icon size={18} />
                                    <span className="flex-1 ml-3 whitespace-nowrap">{item.name}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </motion.aside>

    )
}

export default SideBar;