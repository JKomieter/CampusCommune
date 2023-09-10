"use client";
import ProfileHero from "@/components/Profile/ProfileHero";
import ProfileNav from "@/components/Profile/ProfileNav";
import { db } from "@/firebase/config";
import { currentUserType } from "@/types";
import { user } from "@nextui-org/react";
import { query, where, getDocs, collection } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Profile() {
    const [currentUser, setCurrentUser] = useState<currentUserType>({} as currentUserType);
    const params = useParams();
    const usersCollectionRef = collection(db, "user");

    useEffect(() => {
        const username = params.user_name as string;
        const full_name = username.split("-").join(" ")

        const getCurrentUser = async () => {
            const userRef = query(usersCollectionRef, where("full_name", "==", full_name || ""));
            const querySnapshot = await getDocs(userRef);
            setCurrentUser(querySnapshot.docs.map((doc) => doc.data())[0] as currentUserType);
        };

        getCurrentUser();
    }, [user]);


    return (
        <div className="w-full h-screen bg-neutral-100 overflow-x-hidden ">
            <div className="lg:px-36 h-full md:px-16 sm:px-12 px-3 w-full overflow-x-hidden mt-20">
                <ProfileHero
                    full_name={currentUser?.full_name}
                    email={currentUser?.email}
                    profile_pic={currentUser?.profile_pic}
                    followers={currentUser?.followers}
                    followings={currentUser?.followings}
                    join_date={currentUser?.join_date}
                    major={currentUser?.major}
                    answers_given={currentUser?.answers_given}
                    questions_asked={currentUser?.questions_asked}
                    level={currentUser?.level}
                    id={""}
                    about_me={""} 
                    batch_year={0} 
                    location={""} 
                    topics_followed={[]} 
                    username={""} 
                />
                <ProfileNav />
            </div>
        </div>
    )
};

