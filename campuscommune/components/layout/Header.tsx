"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from "../svgs";
import HeaderIcons from "./HeaderIcons";
import HeaderSearchBar from "./HeaderSearchBar";
import { Button } from "@nextui-org/react";


const Header = () => {
    return (
      <div className="top-0 fixed w-full lg:px-36 md:px-16 sm:px-12 px-3 py-2 shadow-lg bg-white">
        <div className="flex items-center justify-between gap-4 w-full ">
          <div className="font-sans font-semibold lg:text-2xl md:text-xl text-lg text-[#FF725E] hidden md:flex">
            Camp<span className="text-neutral-700">Comm</span>
          </div>
          <span className="flex md:hidden">
            <Logo className="text-[#FF725E] text-4xl" />
          </span>
          <HeaderIcons />
          <HeaderSearchBar />
          <Button className="rounded-xl bg-neutral-700 md:flex hidden items-center justify-center px-2 py-2">
            <p className="text-neutral-100 font-bold text-lg">Ask</p>
          </Button>
          <span className="flex md:hidden p-2 bg-neutral-300 rounded-lg items-center justify-center cursor-pointer">
              <GiHamburgerMenu size={25} />
          </span>
        </div>
      </div>
    );
}

export default Header;