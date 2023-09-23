import Image from "next/image";
import { useMemo } from "react";


const NoteType = ({
    media,
}: {
    media: Blob,
}) => {
    const type = useMemo(() => {
        switch (media.type) {
            case "image/png":
            case "image/jpeg":
            case "image/svg+xml":
            case "image/gif":
            case "image/webp":
            case "image/apng":
                return "image";
            case "application/pdf":
                return "pdf";
            default:
                return "unknown";
        }
    }, [media.type]);


    return (
        <div className="w-full max-h-[200px] overflow-y-scroll">
            {
                type === "image" ?
                (<Image
                    src={URL.createObjectURL(new Blob([media]))}
                    alt="media"
                    layout="responsive"
                    width={800}
                    height={400}
                    className="object-contain"
                    blurDataURL="https://img.freepik.com/premium-photo/black-background-dark-wallpaper-blackboard-studio-backgorund-blur-background-gradient_14349-510.jpg"
                    loading="lazy"
                />) : (
                    // <PdfViewerComponent media={media} />
                    <p className="text-lg font-semibold text-neutral-600">
                        {media.name}
                    </p>
                )
            }
        </div>
    )
}


export default NoteType;