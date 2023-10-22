import { NoteType } from "@/types";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { TbShare3 } from "react-icons/tb";
import { Image } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/firebase/config";
import toast from "react-hot-toast";


const NoteItem = ({
    note,
}: {
    note: NoteType;
}) => {

    const [liked, setLiked] = useState(false);
    

    const handleDownload = useCallback(async () => {
        // get  file from firebase storage with the media_path
        try {
            const storageRef = ref(storage, note.media_path);
            const url = await getDownloadURL(storageRef);
            window.open(url);
            toast.success("File downloaded successfully");
        } catch (error) {
            console.log(error);
            toast.error("Error downloading file");
        }
    }, [note.media_path]);

    return (
        <Card
            isBlurred
            className="border-none max-w-[610px]"
            shadow="sm"
        >
            <CardBody>
                <div className="flex flex-row gap-4">
                    <div className="w-full h-full">
                        <Image
                            src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-us/S001576416/MXP16228-notebooks-pdp-usecase-hero-001?cb=a22881307b4a446cbdbeed5d80992c73591d01d7"
                            width={400}
                            height={500}
                            alt="Author Image"
                            className="w-full h-full cursor-pointer object-cover"
                            sizes="400"
                            shadow="md"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-neutral-800 text-sm md:text-base">
                            {note.title}
                        </h3>
                        <p className="md:text-sm text-xs text-neutral-500">
                            {note.description}
                        </p>
                    </div>
                </div>
            </CardBody>
            <CardFooter>
                <div className="flex flex-row items-center w-full justify-end gap-2">
                    <FiDownload
                        onClick={handleDownload}
                        size={20}
                        className="text-lg cursor-pointer text-neutral-500"
                    />
                    <TbShare3
                        size={20}
                        className="text-lg cursor-pointer text-neutral-500"
                    />
                    <BiBookmark
                        size={20}
                        className="text-lg cursor-pointer text-neutral-500"
                    />
                    {
                        liked ?
                            <AiFillHeart
                                size={20}
                                className="text-lg cursor-pointer text-red-500"
                                onClick={() => setLiked(!liked)}
                            /> :
                            <AiOutlineHeart
                                size={20}
                                className="text-lg cursor-pointer text-neutral-500"
                                onClick={() => setLiked(!liked)}
                            />
                    }
                </div>
            </CardFooter>
        </Card>
    )
};


export default NoteItem;