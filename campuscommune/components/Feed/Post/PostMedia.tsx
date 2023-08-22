import Image from "next/image";


const PostMedia = ({image}: {image: string}) => {
    return (
        <div className="w-full">
            <Image
                src={"/images/CodingSetup.jpeg"}
                alt="Coding Setup"
                width={500}
                height={500}
                className="sm:max-h-[300px] w-full object-cover"
            />
        </div>
    )
}

export default PostMedia;