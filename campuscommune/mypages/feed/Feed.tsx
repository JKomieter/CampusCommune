import { db, auth } from "@/firebase/config";
import { useState, useEffect, useCallback } from "react";
import { arrayUnion, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { PostType, FeedType, QuestionType } from "@/types";
import { usePostLoadingStore } from "@/store/usePostLoading";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import FeedSkeleton from "../../components/FeedSkeleton";
import PostItem from "../../components/PostItem";
import PostProgress from "../../components/PostProgress";
import QuestionItem from "../../components/QuestionItem";
import useGetCurrentUser from "@/hooks/useGetCurrentUser";
import { useFeed } from "@/services/useFeed";


const Feed = () => {
  const { currentUser } = useGetCurrentUser();
  const { data, mutate, isLoading } = useFeed();
  const [posts, setPosts] = useState<FeedType[]>([]);
  const [user] = useAuthState(auth);
  const { postLoading } = usePostLoadingStore();

  
  const handleUpvote = useCallback(async (e: React.MouseEvent<HTMLDivElement, MouseEvent>, post_title: string) => {
    e.preventDefault();
    try {
      const postRefQuery = query(collection(db, "posts"), where("title", "==", post_title));
      const postSnapshot = await getDocs(postRefQuery);
      let post_id = "";
      postSnapshot.forEach((doc) => {
        post_id = doc.id;
      });

      const postRef = doc(db, "posts", post_id);

      await updateDoc(postRef, {
        upvotes: arrayUnion(user?.email),
      });

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          (post as PostType).title === post_title && post.type === "post"
            ? {
              ...post,
              upvotes: [...post.upvotes, currentUser?.email], // Update the upvotes array
            }
            : post
        )
      );
      toast.success("Upvoted post");
      mutate();
    } catch (error) {
      console.log(error);
      toast.error("Error upvoting post");
    }
  }, [user?.email]);


  useEffect(() => {
    setPosts(data);
  }, []);


  if (posts?.length === 0 && isLoading) return <FeedSkeleton />;

  return (
    <div className="flex flex-col gap-4 items-center justify-center overflow-y-scroll w-full">
      <PostProgress postLoading={postLoading} />
      {posts?.map((post: 
        PostType | QuestionType
      ) =>
        <div key={post.author_email + post.id} className="w-full">
          {post.type === "post" ? (
            <PostItem
              id={post.id}
              author_email={post.author_email}
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
              handleUpvote={handleUpvote}
              currentUserEmail={currentUser?.email}
              currentUserPhoto={currentUser?.profile_pic}
              currentUserFullname={currentUser?.full_name}
              category={[]}
            />
          ) : (
            <QuestionItem
                id={post.id}
                author_email={(post as QuestionType).author_email}
                author_id={(post as QuestionType).author_id}
                author_name={(post as QuestionType).author_name}
                text={(post as QuestionType).text}
                answers={(post as QuestionType).answers}
                followers={(post as QuestionType).followers}
                pass={(post as QuestionType).pass}
                created_at={(post as QuestionType).created_at}
                type={(post as QuestionType).type} 
                currentUserEmail={currentUser?.email}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Feed;
