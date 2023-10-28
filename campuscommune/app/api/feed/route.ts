import { db } from "@/firebase/config";
import { PostType, QuestionType } from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";



export async function GET(request: Request) {
    try {
        const postsCollectionRef = collection(db, "posts");
        const questionsCollectionRef = collection(db, "questions");

        const postsSnapshot = await getDocs(postsCollectionRef);
        const questionsSnapshot = await getDocs(questionsCollectionRef);

        const posts = postsSnapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            } as PostType
        });
        const questions = questionsSnapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                } as QuestionType
            }
        );


        let feed = [...posts, ...questions].sort(() => Math.random() - 0.5);

        return NextResponse.json(feed, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json([], { status: 200 });
    }
}