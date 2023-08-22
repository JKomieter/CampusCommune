import { db } from "@/firebase/config";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { PostType, FeedType, QuestionType } from "@/types";
import PostItem from "./Post/PostItem";
import PostProgress from "./Post/PostProgress";
import { usePostLoadingStore } from "@/store/postLoading";
import QuestionItem from "./Question/QuestionItem";

const Feed = () => {
  const [posts, setPosts] = useState<FeedType[]>([]);
  const { postLoading } = usePostLoadingStore();

  const postsCollectionRef = collection(db, "posts");
  const questionsCollectionRef = collection(db, "questions");


  useEffect(() => {
    const getPosts = async () => {
      try {
        const dataPosts = await getDocs(postsCollectionRef);
        const dataQuestions = await getDocs(questionsCollectionRef);

        const Feed = [
          ...dataPosts.docs.map((doc) => doc.data() as PostType),
          ...dataQuestions.docs.map((doc) => doc.data() as QuestionType),
        ].sort(() => Math.random() - 0.5);

        // setPosts(dataPosts.docs.map((doc) => doc.data() as Post));
        setPosts(Feed);
      } catch (error) {
        console.log(error);
        setPosts([]);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center justify-center overflow-y-scroll w-full">
      <PostProgress postLoading={postLoading} />
      {posts.map((post) =>
        post.type === "post" ? (
          <PostItem
            key={post.author_id}
            author_id={post.author_id}
            author_name={post.author_name}
            author_photo={(post as PostType).author_photo}
            title={(post as PostType).title}
            body={(post as PostType).body}
            tags={(post as PostType).tags}
            upvotes={(post as PostType).upvotes}
            downvotes={(post as PostType).downvotes}
            image={(post as PostType).image}
            created_at={(post as PostType).created_at}
            author_major={(post as PostType).author_major}
            author_year={(post as PostType).author_year}
            answers={post.answers}
            type={post.type}
          />
        ) : (
          <QuestionItem
            key={post.author_id}
            author_id={(post as QuestionType).author_id}
            author_name={(post as QuestionType).author_name}
            text={(post as QuestionType).text}
            answers={(post as QuestionType).answers}
            followers={(post as QuestionType).followers}
            pass={(post as QuestionType).pass}
            created_at={(post as QuestionType).created_at}
            type={(post as QuestionType).type}
          />
        )
      )}
    </div>
  );
};

export default Feed;
