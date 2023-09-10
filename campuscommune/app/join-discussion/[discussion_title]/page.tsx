"use client";
import LiveDiscussion from "@/components/Discussion/DiscussionTitle/LiveDiscussion";
import { useParams } from "next/navigation";
import { useState } from "react";


export default function Discussion() {
    const params = useParams();
    const discussion_title = params.discussion_title as string;
    const full_title = discussion_title.split("%20").join(" ");
    const [title, setTitle] = useState<string>(full_title);

    return (
        <div className="w-full lg:px-36 md:px-16 sm:px-12 px-3">
            <LiveDiscussion full_title={title} />
        </div>
    )
}