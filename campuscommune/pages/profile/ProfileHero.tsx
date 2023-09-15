import { currentUserType } from "@/types";
import Hero from "./Hero";
import HeroCredentials from "./HeroCredentials";



const ProfileHero: React.FC<currentUserType> = ({
    full_name,
    email,
    profile_pic,
    followers,
    followings,
    join_date,
    major,
    answers_given,
    questions_asked,
    level,
    about_me,
}) => {


    return (
        <div className="flex md:flex-row flex-col items-start justify-between md:gap-14 gap-2">
            <Hero
                full_name={full_name}
                email={email}
                profile_pic={profile_pic}
                followers={followers}
                followings={followings}
                join_date={join_date}
                major={major}
                answers_given={answers_given}
                questions_asked={questions_asked}
                level={level} 
                id={""} 
                about_me={about_me} 
                batch_year={1} 
                location={""} 
                topics_followed={[]} 
                username={""} 
            />
            <HeroCredentials
                join_date={join_date}
            />
        </div>
    )
};

export default ProfileHero;