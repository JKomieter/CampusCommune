"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { use, useEffect, useState } from "react";
import { SpaceType } from "@/types";
import { Avatar, Badge } from "@nextui-org/react";


const SpacesCollection = () => {
    const [user] = useAuthState(auth);
    const [spaces, setSpaces] = useState<SpaceType[]>([] as SpaceType[]);
    const spacesCollectionRef = collection(db, "spaces");
    

    useEffect(() => {
        const userEmail = user?.email;

        // Check if user email is defined before making the query
        if (userEmail) {
            const getSpaces = async () => {
                const spacesSnapshot = query(spacesCollectionRef, where("members", "array-contains", userEmail));
                const spacesSnapshotData = await getDocs(spacesSnapshot);
                const spacesData = spacesSnapshotData.docs.map((doc) => ({
                    ...doc.data()
                })) as SpaceType[];
                setSpaces(spacesData);
            };

            getSpaces();
        }
    }, [user?.email]);
    

    return (
        <div className="flex flex-col w-full">
            {
                spaces.map((space) => (
                    <div key={space.description} className="flex flex-row items-start gap-3 hover:bg-black p-3 cursor-pointer">
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