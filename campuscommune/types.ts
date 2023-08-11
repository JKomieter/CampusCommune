export type Question = {
    authorId: string;
    authorName: string;
    authorMajor: string;
    authorYear: number;
    authorPhotoURL: string;
    title: string;
    body: string;
    createdAt: Date;
    upvotes: number;
    downvotes: number;
    tags: string[];
    image: string;
    answers: Answer[];
}

export type Answer = {
    authorName: string;
    body: string;
    createdAt: Date;
}

export interface UserQuestionDisplayProps {
    authorId: string;
    authorName: string;
    authorMajor: string;
    authorYear: number;
    authorPhotoURL: string;
    createdAt: Date;
}

export interface QuestionInfoProps {
    title: string;
    body: string;
}