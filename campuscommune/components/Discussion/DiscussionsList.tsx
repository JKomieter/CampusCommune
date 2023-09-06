"use client";
import { useEffect, useState } from "react";
import { DiscussionListType } from "@/types";
import { db } from "@/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import DiscussionItem from "./DiscussionItem";


const DiscussionsList = () => {

    const [discussions, setDiscussions] = useState<DiscussionListType[]>([]);
    const discussionsCollectionRef = collection(db, "discussions");

    useEffect(() => {
        const unsubDiscussion = onSnapshot(discussionsCollectionRef, (snapshot) => {
            setDiscussions(snapshot.docs.map((doc) => doc.data()) as DiscussionListType[]);
        });

        return () => {
            unsubDiscussion();
        }
    }, []);


    return (
        <div className="w-full flex flex-col gap-3">
            {
                discussions.map((discussion, index = 0) => (
                    <DiscussionItem
                        key={discussion.title}
                        views={discussion.views}
                        index={index++}
                        title={discussion.title}
                        description={discussion.description}
                        participants={discussion.participants}
                        category={discussion.category}
                    />
                ))
            }
        </div>
    )
}

export default DiscussionsList;