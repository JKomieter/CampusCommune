"use client";
import { useEffect } from "react";
import { auth } from "@/firebase/config";
import Spaces from "./components/layout/Spaces";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import MainContent from "./components/layout/MainContent";

export default function Home() {

  const [ user, loading, error ] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    // f (!user) {
    //   router.push("/auth/signin");
    // }i
  }, [error]);

  return (
    <div className="w-full lg:px-36 md:px-16 sm:px-12 flex flex-row mt-20 gap-5 items-start">
      <Spaces />
      <MainContent />
      {/* <News /> */}
    </div>
  );
}