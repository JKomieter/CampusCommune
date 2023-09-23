"use client";
import { db } from "@/firebase/config";
import SpaceHero from "@/mypages/spaces/SpaceHero";
import { SpaceType } from "@/types";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function SpacePage() {

    let { space_name } = useParams() as {space_name: string};
    space_name = space_name.split("%20").join(" ");
    const [space, setSpace] = useState<SpaceType>({} as SpaceType);
    const spacesCollectionRef = collection(db, "spaces");


    useEffect(() => {
        const getSpace = async () => {
            try {
                const spaceQuery = query(spacesCollectionRef, where("name", "==", space_name));
                const querySnapshot = await getDocs(spaceQuery);
                const spaceData = querySnapshot.docs.map((doc) => ({
                    ...doc.data()
                })) as SpaceType[];
                if (spaceData.length > 0) {
                    setSpace(spaceData[0]);
                } else {
                    console.error("No space found with name", space_name);
                }
            } catch (error) {
                console.error("Error fetching space:", error);
            }
        };

        getSpace();
    }, []);


    return (
        <div className="w-full h-full mt-14">
            <SpaceHero space={space} />
        </div>
    )
};
