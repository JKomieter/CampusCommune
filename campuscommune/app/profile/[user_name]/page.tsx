"use client";
import ProfileFeed from "@/mypages/profile/ProfileFeed";
import ProfileHero from "@/mypages/profile/ProfileHero";
import ProfileNav from "@/components/ProfileNav";
import queryUser from "@/hooks/queryUser";
import { useParams } from "next/navigation";


export default function Profile() {
    const params = useParams() as { user_name: string };
    const { user } = queryUser(params.user_name);


    return (
        <div className="w-full h-screen bg-neutral-100 overflow-x-hidden ">
            <div className="lg:px-36 h-full md:px-16 sm:px-12 px-3 w-full overflow-x-hidden mt-20">
                <ProfileHero
                    full_name={user?.full_name}
                    email={user?.email}
                    profile_pic={user?.profile_pic}
                    followers={user?.followers}
                    followings={user?.followings}
                    join_date={user?.join_date}
                    major={user?.major}
                    answers_given={user?.answers_given}
                    questions_asked={user?.questions_asked}
                    level={user?.level}
                    id={""}
                    about_me={user?.about_me} 
                    batch_year={0} 
                    location={""} 
                    topics_followed={[]} 
                    username={user?.username} 
                />
                <ProfileNav />
                <ProfileFeed user_email={user?.email} />
            </div>
        </div>
    )
};

