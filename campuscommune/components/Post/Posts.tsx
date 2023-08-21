import { db } from "@/firebase/config";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Post } from "@/types";
import PostItem from "./PostItem";
import { getFeeds } from "@/services/getFeeds";
import PostProgress from "./PostProgress";
import { usePostLoadingStore } from "@/store/postLoading";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { postLoading } = usePostLoadingStore();

  const postsCollectionRef = collection(db, "posts");
  getFeeds();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postsCollectionRef);
        
        setPosts(data.docs.map((doc) => doc.data() as Post));
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
      
      {posts.map((post: Post) => (
        <PostItem
          key={post.author_id}
          author_id={post.author_id}
          author_name={post.author_name}
          author_photo={post.author_photo}
          title={post.title}
          body={post.body}
          tags={post.tags}
          upvotes={post.upvotes}
          downvotes={post.downvotes}
          image={post.image}
          created_at={post.created_at}
          author_major={post.author_major}
          author_year={post.author_year}
          answers={post.answers}
        />
      ))}
    </div>
  );
};

export default Posts;
