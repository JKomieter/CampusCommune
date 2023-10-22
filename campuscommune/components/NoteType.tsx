import { Image } from "@nextui-org/react";
import { useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";


const NoteType = ({
    media,
    preview,
}: {
    media: Blob,
    preview: string,
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
                (
                <Image
                    src={preview}
                    alt="preview"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    loading="lazy"
                />
                )  : (
                    <p className="text-lg font-semibold text-neutral-600">
                        {media.name}
                    </p>
                )
            }
        </div>
    )
}


export default NoteType;