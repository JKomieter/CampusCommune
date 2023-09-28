import { SpaceType } from "@/types";
import { Button, Image } from "@nextui-org/react";
import SpaceHeroDetails from "./SpaceHeroDetais";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiDotsThreeOutline } from "react-icons/pi";
import { MdOutlinePostAdd } from "react-icons/md";
import { BsDot, BsGraphUpArrow } from "react-icons/bs";



const SpaceHero = ({space}: {space: SpaceType}) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing);
    };


    return (
        <div 
        style={{backgroundImage: `url(${space.space_photo})`, height: "80vh", backgroundSize: "cover", backgroundPosition: "center"}}
        className="flex flex-col">
            <div className="basis-1/3 w-full h-full"></div>
            <div 
                className="basis-2/3 h-full w-full flex flex-col gap-3 lg:px-36 md:px-16 sm:px-12 px-3" 
                style={{ backdropFilter: "blur(10px)" }}>
                <div style={{ marginTop: "-46px" }} className="flex flex-row items-end justify-between">
                    <Image
                        src={space.icon}
                        width={130}
                        height={170}
                    />
                    <div className="flex flex-row items-center gap-4">
                        <PiDotsThreeOutline size={24} className="text-neutral-100" />
                        <FaRegBell size={24} className="text-neutral-100 md:flex hidden" />
                        <Button
                            variant="solid"
                            size="md"
                            onClick={handleFollowClick}
                            className="flex items-center gap-1 bg-blue-500 rounded-3xl p-2 text-neutral-100 md:text-base text-sm hover:bg-blue-800"
                        >
                            <MdOutlinePostAdd size={18} />
                            <span>{isFollowing ? "Following" : "Follow Space"}</span>
                            <IoIosArrowDown />
                        </Button>
                    </div>
                </div>
                <SpaceHeroDetails space={space} />
                <div className="flex flex-row gap-1 items-center text-sm text-neutral-400 w-full">
                    <p>{space.contributors?.length || 3} contributors</p>
                    <BsDot size={12} />
                    <p>10.2k followers</p>
                    <BsDot size={12} />
                    <div className="flex flex-row gap-1 items-center">
                        <BsGraphUpArrow size={12} /> 7 posts today
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SpaceHero;