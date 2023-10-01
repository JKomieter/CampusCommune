"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SpaceType } from "@/types";
import { Avatar, Badge } from "@nextui-org/react";
import { useRouter } from "next/navigation";


const SpacesCollection = () => {
    const [user] = useAuthState(auth);
    const [spaces, setSpaces] = useState<SpaceType[]>([] as SpaceType[]);
    const spacesCollectionRef = collection(db, "spaces");
    const router = useRouter();


    useEffect(() => {
        let userEmail = user?.email;
        const getSpaces = async () => {
            try {
                if (userEmail) {
                    const spacesSnapshot = query(
                        spacesCollectionRef,
                        where('contributors', 'array-contains', { user_email: userEmail })
                    );
                    const spacesSnapshotData = await getDocs(spacesSnapshot);
                    const spacesData = spacesSnapshotData.docs.map(doc => ({
                        ...doc.data()
                    })) as SpaceType[];
                    setSpaces(spacesData);
                }
            } catch (error) {
                console.error("Error fetching spaces:", error);
            }
        };

        getSpaces();
    }, [user?.email]);


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