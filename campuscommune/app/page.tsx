"use client";
import { useEffect } from "react";
import { auth } from "@/firebase/config";
import Spaces from "../components/layout/Spaces";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import MainContent from "../components/layout/MainContent";
import News from "@/components/News/News";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    // if (!user) {
    //   router.push("/auth/signin");
    // }
  }, []);

  return (
    <div className="w-full h-screen bg-neutral-300 overflow-x-hidden ">
      <div className="lg:px-36 h-full md:px-16 sm:px-12 px-3 w-full flex flex-row gap-2 items-start overflow-x-hidden mt-20">
        <Spaces />
        <MainContent />
        <News />
      </div>
    </div>
  );
}
