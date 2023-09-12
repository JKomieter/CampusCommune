"use client";
import ProfileHero from "@/components/Profile/ProfileHero";
import ProfileNav from "@/components/Profile/ProfileNav";
import queryUser from "@/hooks/queryUser";
import { useParams } from "next/navigation";


export default function Profile() {
    const params = useParams();

    const { currentUser } = queryUser(params.user_name as string);

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
                    about_me={currentUser?.about_me} 
                    batch_year={0} 
                    location={""} 
                    topics_followed={[]} 
                    username={currentUser?.username} 
                />
                <ProfileNav />
            </div>
        </div>
    )
};

