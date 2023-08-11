"use client";
import { useEffect } from "react";
import { auth } from "@/firebase/config";
import Spaces from "../components/layout/Spaces";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import MainContent from "../components/layout/MainContent";
import News from "@/components/layout/News";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    // f (!user) {
    //   router.push("/auth/signin");
    // }i
  }, [error]);

  return (
    <div className="w-full h-screen bg-neutral-200 overflow-x-hidden ">
      <div className="lg:px-36 h-full md:px-16 sm:px-12 px-3 w-full flex flex-row gap-2 items-start overflow-x-hidden mt-20">
        <Spaces />
        <MainContent />
        <News />
      </div>
    </div>
  );
}
