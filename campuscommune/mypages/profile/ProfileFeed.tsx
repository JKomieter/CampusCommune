import { db } from "@/firebase/config";
import { FeedType, PostType, QuestionType } from "@/types";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import UserFeed from "./UserFeed";


const ProfileFeed = ({
    user_email
}: {
    user_email: string;
}) => {    
    const postsCollectionRef = collection(db, "posts");
    const questionsCollectionRef = collection(db, "questions");
    const [feed, setFeed] = useState<FeedType[]>([]);
    

    useEffect(() => {
        const getUserFeed = async () => {
            const queryPosts = query(postsCollectionRef, where("author_email", "==", user_email));
            const postQuerySnapshot = await getDocs(queryPosts);
            const posts = postQuerySnapshot.docs.map(doc => doc.data() as PostType);

            const queryQuestions = query(questionsCollectionRef, where("author_email", "==", user_email));
            const questionQuerySnapshot = await getDocs(queryQuestions);
            const questions = questionQuerySnapshot.docs.map(doc => doc.data() as QuestionType);

            setFeed([...posts, ...questions]);
        }
        if (user_email?.length > 0) getUserFeed();
    }, [user_email]);

    if (feed.length <= 0) return (
        <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-2xl font-semibold text-center">No posts yet</h1>
        </div>
    );

    return (
        <div className="w-full">
            <UserFeed feed={feed}/>
        </div>
    )
};

export default ProfileFeed;


