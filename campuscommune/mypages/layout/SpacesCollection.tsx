"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SpaceType } from "@/types";
import { Avatar, Badge } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSpaces } from "@/services/useSpaces";


const SpacesCollection = () => {
    const [user] = useAuthState(auth);
    const [spaces, setSpaces] = useState<SpaceType[]>([] as SpaceType[]);
    const spacesCollectionRef = collection(db, "spaces");
    const router = useRouter();
    const { data, error, isLoading, mutate } = useSpaces(user?.email!);
   
    useEffect(() => {
        if (data) {
            setSpaces(data);
        }
    }, [data]);

    return (
        <div className="flex flex-col w-full">
            {
                spaces.map((space) => (
                    <div key={space.description}
                        onClick={() => router.push(`/spaces/${space.name}`)}
                        className="flex flex-row items-start gap-3 p-3 cursor-pointer duration-200 transition-all hover:bg-neutral-200">
                        <Badge content="2" size="sm" color="primary">
                            <Avatar
                                radius="lg"
                                src={space.space_photo}
                                alt=""
                            />
                        </Badge>
                        <p className="text-sm text-neutral-200 w-full">
                            {space.name}
                        </p>
                    </div>
                ))
            }
        </div>
    )
};

export default SpacesCollection;