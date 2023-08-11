import { auth, db } from "@/firebase/config";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Question } from "@/types";
import QuestionItem from "./items/QuestionItem";

const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const questionsRef = collection(db, "questions");

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await getDocs(questionsRef);
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
          key={question.authorId}
          authorId={question.authorId}
          authorName={question.authorName}
          authorPhotoURL={question.authorPhotoURL}
          title={question.title}
          body={question.body}
          tags={question.tags}
          upvotes={question.upvotes}
          downvotes={question.downvotes}
          image={question.image}
          createdAt={question.createdAt}
          authorMajor={question.authorMajor}
          authorYear={question.authorYear}
        />
      ))}
    </div>
  );
};

export default Questions;
