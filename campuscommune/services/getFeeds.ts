import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";


export const getFeeds = async () => {
    const questionsCollectionRef = collection(db, "questions");
    const postsCollectionRef = collection(db, "posts");

    const posts = await getDocs(postsCollectionRef);
    const questions = await getDocs(questionsCollectionRef);

    // put all the posts and questions in a shuffled array
    const feeds = [
      ...posts.docs,
      ...questions.docs,
    ].sort(() => Math.random() - 0.5);

    console.log(feeds);

    return feeds;

}

