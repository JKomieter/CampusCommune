"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderIcons from "./HeaderIcons";
import HeaderSearchBar from "./HeaderSearchBar";
import { Avatar, Badge, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FaRegBell } from "react-icons/fa";
import { useSidebarStore } from "@/store/useSidebarControlStore";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { auth, db } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { currentUserType } from "@/types";
import AvatarPopoverContent from "../../components/AvatarPopoverContent";
import { usePathname } from "next/navigation";


const Header = () => {

  const router = useRouter();
  const pathname = usePathname();
  const { toggleSidebar, isSidebarOpen } = useSidebarStore();
  const [user] = useAuthState(auth);
  const usersCollectionRef = collection(db, "user")
  const [currentUser, setCurrentUser] = useState<currentUserType>({} as currentUserType);

  useEffect(() => {
    const getCurrentUser = async () => {
      const userRef = query(usersCollectionRef, where("email", "==", user?.email || ""));
      const querySnapshot = await getDocs(userRef);
      setCurrentUser(querySnapshot.docs.map((doc) => doc.data())[0] as currentUserType);
    };

    getCurrentUser();
  }, [user]);


  if (pathname?.includes("auth")) return null;

  return (
    <div className="top-0 fixed w-full lg:px-36 md:px-16 sm:px-12 px-3 py-2 z-50 shadow-lg bg-white">
      <div className="flex items-center justify-between gap-4 w-full ">
        <div 
        onClick={() => router.push("/")}
        className="font-sans font-semibold md:text-2xl sm:text-xl text-lg text-neutral-700 hidden md:flex cursor-pointer">
          Camp<span className=" text-[#FF725E]">Comm</span>
        </div>
        <div className="flex md:hidden font-semibold lg:text-2xl md:text-xl text-lg">
          <span className="text-neutral-700">C</span>
          <span className="text-[#FF725E]">C</span>
        </div>
        <HeaderIcons />
        <HeaderSearchBar />
        <span className="md:hidden flex">
          <Badge color="primary" shape="circle" content="2">
            <FaRegBell size={27} className="text-neutral-600" />
          </Badge>
        </span>
        <div className="md:flex hidden cursor-pointer">
          <Popover 
          showArrow
          placement="bottom" color="default">
            <PopoverTrigger>
              <Avatar
                src={currentUser?.profile_pic || "https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"}
                size="md"
                className="z-0"
              />
            </PopoverTrigger>
            <PopoverContent className="rounded-sm px-0 shadow-lg">
              <AvatarPopoverContent
                user_photo={currentUser?.profile_pic}
                user_name={currentUser?.full_name}
                user_email={currentUser?.email}
              />
            </PopoverContent>
          </Popover>
        </div>
        <Button className="rounded-3xl bg-blue-700 md:flex hidden items-center justify-center px-2 py-2">
          <p className="text-neutral-100 font-bold text-lg">Ask</p>
        </Button>
        <span 
        onClick={() => toggleSidebar(!isSidebarOpen)}
        className="flex md:hidden p-2 bg-neutral-300 rounded-lg items-center justify-center cursor-pointer">
          <GiHamburgerMenu size={25} />
        </span>
      </div>
    </div>
  );
};

export default Header;
