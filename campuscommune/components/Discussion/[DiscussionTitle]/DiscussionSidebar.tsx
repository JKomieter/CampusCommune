import React from "react";
import { DiscussionType } from "@/types";
import DiscussionSidebarItem from "./DiscussionSidebarItem";
import { BsPencilSquare } from "react-icons/bs";


const DiscussionSidebar = ({
    currentUserDiscussions
}: {
    currentUserDiscussions: DiscussionType[]
}) => {
    return (
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 mt-14">
                <div className="mb-6 flex flex-row items-center justify-between">
                    <span className="text-lg font-semibold p-2  text-neutral-700 dark:text-white">Your Discussions</span>
                    <BsPencilSquare size={20} className="text-neutral-700" />
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
        </aside>
    )
}

export default DiscussionSidebar;