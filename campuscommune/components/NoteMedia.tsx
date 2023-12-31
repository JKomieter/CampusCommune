import React from "react";
import { useDropzone } from 'react-dropzone'
import toast from "react-hot-toast";
import Image from "next/image";
import { Document, Page } from 'react-pdf';
import NoteType from "./NoteType";


const NoteMedia = ({
    media,
    setMedia,
}: {
    media: Blob,
    setMedia: React.Dispatch<React.SetStateAction<Blob>>
}) => {
    const [preview, setPreview] = React.useState<string>("");

    const onDrop = React.useCallback((acceptedFiles: File[]) => {
        try {
            const file = acceptedFiles[0];
            const reader = new FileReader();
    
            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target) {
                    setMedia(file);
                    setPreview(URL.createObjectURL(file));
                }
            };
    
            reader.readAsDataURL(file);
        } catch (error) {
            console.log(error);
            toast.error("Error uploading file. Try again later.");
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            "image/png": [],
            "image/jpeg": [],
            "image/svg+xml": [],
            "image/gif": [],
            "image/webp": [],
            "image/apng": [],
            "application/pdf": [],
        },
    });


    return (
            <>
            { media.size !== 0 ? (
                <NoteType media={media} preview={preview} />
            )
            : 
            (
                <div {...getRootProps()} className="flex items-center justify-center w-full h-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <span
                            className="hidden"
                            {...getInputProps()}
                        />
                    </label>
                </div>
                )
            } 
        </>
    )
};


export default NoteMedia;