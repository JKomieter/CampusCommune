"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Loading() {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url: string) => (url === router.asPath) 
            && setTimeout(() => setLoading(false), 5000);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        }
    }, []);

    return loading && (
        <div className="absolute z-[999] bg-neutral-100 w-screen h-screen flex items-center justify-center flex-col gap-4">
            <h3 className="font-bold text-neutral-700 lg:text-3xl md:text-2xl sm:text-xl text-lg">
                Camp<span className=" text-[#FF725E]">Comm</span>
                <Image
                    src="/images/Loading.gif"
                    alt="Campus Commune Logo"
                    width={100}
                    height={100}
                    unoptimized
                />
            </h3>
        </div>
    )
};

