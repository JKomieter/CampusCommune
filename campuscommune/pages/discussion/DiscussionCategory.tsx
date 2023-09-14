"use client";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { RiArrowDownSLine } from "react-icons/ri";
import CategoriesPopover from "../../components/CategoriesPopover";


const DiscussionCategory = () => {
    return (
        <div className="w-full flex flex-row justify-start py-3 gap-3">
            <Popover placement="bottom">
                <PopoverTrigger>
                    <button
                        className="flex flex-row items-center gap-2 focus:outline-none text-xs
                        text-neutral-700 bg-neutral-300 cursor-pointer px-4 py-2 rounded-sm"
                    >
                        All Categories
                        <RiArrowDownSLine size={17} className="text-neutral-700" />
                    </button>
                </PopoverTrigger>
                <PopoverContent  className="rounded-sm px-0 shadow-lg">
                    <CategoriesPopover />
                </PopoverContent>
            </Popover>
            <Popover placement="bottom">
                <PopoverTrigger>
                    <button
                        className="flex flex-row items-center gap-2 focus:outline-none text-xs
                        text-neutral-700 bg-neutral-300 cursor-pointer px-4 py-2 rounded-sm"
                    >
                        Tags
                        <RiArrowDownSLine size={17} className="text-neutral-700" />
                    </button>
                </PopoverTrigger>
                <PopoverContent className="rounded-sm px-0 shadow-lg">
                    <CategoriesPopover />
                </PopoverContent>
            </Popover>
            <Popover placement="bottom">
                <PopoverTrigger>
                    <button
                        className="flex flex-row items-center gap-2 focus:outline-none text-xs
                        text-neutral-700 bg-neutral-300 cursor-pointer px-4 py-2 rounded-sm"
                    >
                        Latest
                        <RiArrowDownSLine size={17} className="text-neutral-700" />
                    </button>
                </PopoverTrigger>
                <PopoverContent className="rounded-sm px-0 shadow-lg">
                    <CategoriesPopover />
                </PopoverContent>
            </Popover>
        </div>
    )
};

export default DiscussionCategory;