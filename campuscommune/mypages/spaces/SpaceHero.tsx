import { SpaceType } from "@/types";
import { Button, Image } from "@nextui-org/react";
import SpaceHeroDetails from "./SpaceHeroDetais";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiDotsThreeOutline } from "react-icons/pi";



const SpaceHero = ({space}: {space: SpaceType}) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing);
    };


    return (
        <div 
        style={{backgroundImage: `url(${space.space_photo})`, height: "70vh", backgroundSize: "cover", backgroundPosition: "center"}}
        className="flex flex-col">
            <div className="basis-1/3 w-full h-full"></div>
            <div 
                className="basis2/3 h-full w-full flex flex-col gap-3 lg:px-36 md:px-16 sm:px-12 px-3" 
                style={{ backdropFilter: "blur(10px)" }}>
                <div style={{ marginTop: "-46px" }} className="flex flex-row items-end justify-between">
                    <Image
                        src={space.icon}
                        width={130}
                        height={170}
                    />
                    <div className="flex flex-row items-center gap-4">
                        <PiDotsThreeOutline size={24} className="text-neutral-100" />
                        <FaRegBell size={24} className="text-neutral-100" />
                        <Button
                            variant="bordered"
                            size="md"
                            onClick={handleFollowClick}
                            className="flex items-center gap-1 rounded-3xl p-2 text-neutral-100 md:text-base text-sm"
                        >
                            <span>{isFollowing ? "Following" : "Follow"}</span>
                            <IoIosArrowDown />
                        </Button>
                    </div>
                </div>
                <SpaceHeroDetails space={space} />
            </div>
        </div>
    )
}


export default SpaceHero;