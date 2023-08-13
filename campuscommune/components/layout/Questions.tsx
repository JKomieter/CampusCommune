import { auth, db } from "@/firebase/config";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Question } from "@/types";
import QuestionItem from "./items/QuestionItem";

const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const usersRef = collection(db, "questions");

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await getDocs(usersRef);
        console.log(data.docs.map((doc) => doc.data()));
        setQuestions(data.docs.map((doc) => doc.data() as Question));
      } catch (error) {
        console.log(error);
        setQuestions([]);
        setLoading(false);
      }
    };

    getQuestions();
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center justify-center overflow-y-scroll w-full">
      {questions.map((question: Question) => (
        <QuestionItem
          key={question.author_id}
          author_id={question.author_id}
          author_name={question.author_name}
          author_photo={question.author_photo}
          title={question.title}
          body={question.body}
          tags={question.tags}
          upvotes={question.upvotes}
          downvotes={question.downvotes}
          image={question.image}
          created_at={question.created_at}
          author_major={question.author_major}
          author_year={question.author_year}
          answers={question.answers}
        />
      ))}
    </div>
  );
};

export default Questions;
