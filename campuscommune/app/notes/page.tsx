"use client";
import FeedSkeleton from "@/components/FeedSkeleton";
import useNotes from "@/hooks/useNotes";
import DisplayNotes from "@/mypages/notes/DisplayNotes";


export default function Notespage() {
    const [notes] = useNotes();

    return (
        <div className="w-full">
            {
                notes.length > 0 ? (
                    <DisplayNotes notes={notes} />
                ) : (
                        <FeedSkeleton />
                    )
            }
        </div>
    )
}