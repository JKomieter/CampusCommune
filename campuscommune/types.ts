export type Post = {
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

export interface UserPostDisplayProps {
    author_id: string;
    author_name: string;
    author_major: string;
    author_year: number;
    author_photo: string;
    created_at: Date;
}

export interface PostInfoProps {
    title: string;
    body: string;
}

export interface PostActionProps {
    upvotes: number;
    downvotes: number;
    answers: Answer[];
}

export interface Question {
    author_id: string;
    author_name: string;
    text: string;
    answers: Answer[];
}