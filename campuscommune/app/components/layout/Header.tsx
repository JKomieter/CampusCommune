"use client";

import HeaderIcons from "./HeaderIcons";
import HeaderSearchBar from "./HeaderSearchBar";
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
    return (
      <div className="top-0 fixed w-full lg:px-48 md:px-24 sm:px-12 p-6 shadow-lg">
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="font-sans font-semibold lg:text-2xl md:text-xl text-lg text-[#FF725E]">
            Campus Commune
          </div>
          <HeaderIcons />
          <HeaderSearchBar />
          <span className="rounded-3xl bg-[#FF725E] flex items-center justify-between px-3 py-3">
            <p className="text-neutral-100">Ask a Question</p>
            <span><IoIosArrowDown size={22} color="white" /></span>
          </span>
        </div>
      </div>
    );
}

export default Header;