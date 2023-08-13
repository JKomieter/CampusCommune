export type Question = {
    author_id: string;
    author_name: string;
    author_major: string;
    author_year: number;
    author_photo: string;
    title: string;
    body: string;
    created_at: Date;
    upvotes: number;
    downvotes: number;
    tags: string[];
    image: string;
    answers: Answer[];
}

export type Answer = {
    author_name: string;
    body: string;
    created_at: Date;
}

export interface UserQuestionDisplayProps {
    author_id: string;
    author_name: string;
    author_major: string;
    author_year: number;
    author_photo: string;
    created_at: Date;
}

export interface QuestionInfoProps {
    title: string;
    body: string;
}

export interface QuestionActionProps {
    upvotes: number;
    downvotes: number;
    answers: Answer[];
}