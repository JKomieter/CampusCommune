import { db, auth } from "@/firebase/config";
import { useState, useEffect, useCallback } from "react";
import { arrayUnion, collection, doc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { PostType, FeedType, QuestionType, currentUserType } from "@/types";
import PostItem from "./Post/PostItem";
import PostProgress from "./Post/PostProgress";
import { usePostLoadingStore } from "@/store/postLoading";
import QuestionItem from "./Question/QuestionItem";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";



const Feed = () => {
  const [posts, setPosts] = useState<FeedType[]>([]);
  const { postLoading } = usePostLoadingStore();
  const postsCollectionRef = collection(db, "posts");
  const questionsCollectionRef = collection(db, "questions");
  const [currentUser, setCurrentUser] = useState<currentUserType>({} as currentUserType);
  const [post_id, setPost_id] = useState<string>("");
  const usersCollectionRef = collection(db, "user");
  const [user] = useAuthState(auth);


  useEffect(() => {
    const getCurrentUser = async () => {
      const userRef = query(usersCollectionRef, where("email", "==", user?.email || ""));
      const querySnapshot = await getDocs(userRef);
      setCurrentUser(querySnapshot.docs.map((doc) => doc.data())[0] as currentUserType);
    };

    getCurrentUser();
  }, [user]);

  
  const handleUpvote = useCallback(async (post_title: string) => {
    console.log(currentUser, post_title);
    try {
      const postRefQuery = query(collection(db, "posts"), where("title", "==", post_title));
      const postSnapshot = await getDocs(postRefQuery);
      postSnapshot.forEach((doc) => {
        setPost_id(doc.id);
      });

      const postRef = doc(db, "posts", post_id);

      await updateDoc(postRef, {
        upvotes: arrayUnion(currentUser.email),
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
    } catch (error) {
      console.log(error);
      toast.error("Error upvoting post");
    }
  }, []);


  useEffect(() => {
    const unsubQuestions = onSnapshot(questionsCollectionRef, (snapshot) => {
      const newQuestions = snapshot.docChanges().map((change) => {
        if (change.type === "added") {
          return change.doc.data() as QuestionType;
        }
        return null;
      }).filter(Boolean) as QuestionType[];

      setPosts((prev) => [...prev, ...newQuestions].sort(() => Math.random() - 0.5));
    });

    const unsubPosts = onSnapshot(postsCollectionRef, (snapshot) => {
      const newPosts = snapshot.docChanges().map((change) => {
        if (change.type === "added") {
          return change.doc.data() as PostType;
        }
        return null;
      }).filter(Boolean) as PostType[];

      setPosts((prev) => [...prev, ...newPosts].sort(() => Math.random() - 0.5));
    });

    return () => {
      unsubQuestions();
      unsubPosts();
    };
  }, []);


  return (
    <div className="flex flex-col gap-4 items-center justify-center overflow-y-scroll w-full">
      <PostProgress postLoading={postLoading} />
      {posts.map((post) =>
        <div key={post.author_id + post.created_at} className="w-full">
          {post.type === "post" ? (
            <PostItem
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
              id={""} 
              currentUserEmail={currentUser.email}
              currentUserPhoto={currentUser.profile_pic}
              currentUserFullname={currentUser.full_name}
            />
          ) : (
            <QuestionItem
              author_email={(post as QuestionType).author_email}
              author_id={(post as QuestionType).author_id}
              author_name={(post as QuestionType).author_name}
              text={(post as QuestionType).text}
              answers={(post as QuestionType).answers}
              followers={(post as QuestionType).followers}
              pass={(post as QuestionType).pass}
              created_at={(post as QuestionType).created_at}
              type={(post as QuestionType).type}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Feed;
