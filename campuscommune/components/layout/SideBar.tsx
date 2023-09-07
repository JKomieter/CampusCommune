"use client";
import { AiOutlinePlus } from "react-icons/ai";
import { BiGroup, BiLogOut } from "react-icons/bi";
import { FaChalkboardTeacher, FaRegListAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { RiDiscussLine, RiHome2Line } from "react-icons/ri";
import { motion } from "framer-motion"
import { useSidebarStore } from "@/store/sidebarControlStore";

const SideBar = () => {

    const { isSidebarOpen } = useSidebarStore();

    return (
        <motion.aside 
        animate={{ x: isSidebarOpen ? 0 : -1000 }}
        transition={{ duration: 0.5 }}
        id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen ">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span className="ml-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <RiHome2Line size={28} className="text-neutral-600" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                            <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaRegListAlt size={26} className="text-neutral-600" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Following</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaRegPenToSquare size={26} className="text-neutral-600" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Answer</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <BiGroup size={31} className="text-neutral-600" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Spaces</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <BiLogOut size={31} className="text-neutral-600" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Sign out</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <AiOutlinePlus size={31} className="text-neutral-600" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Create space</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <GrNotes size={31} className="text-neutral-600" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Share notes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <RiDiscussLine size={31} className="text-neutral-600" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Join discussions</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <MdOutlineExplore size={31} className="text-neutral-600" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Explore courses</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaChalkboardTeacher size={31} className="text-neutral-600" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Find tutors</span>
                        </a>
                    </li>
                </ul>
            </div>
        </motion.aside>

    )
}

export default SideBar;