"use client";
import LiveDiscussion from "@/mypages/discussion/discussionTitle/LiveDiscussion";
import { useParams } from "next/navigation";


export default function Discussion() {
    const params = useParams() as { discussion_title: string };
    const discussion_title = params.discussion_title as string;
    const full_title = discussion_title.split("%20").join(" ");
    

    return (
        <div className="w-full lg:px-36 md:px-16 sm:px-12 px-3">
            <LiveDiscussion full_title={full_title} />
        </div>
    )
}