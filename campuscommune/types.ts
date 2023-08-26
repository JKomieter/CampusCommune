export type FeedType = PostType | QuestionType;

export type PostType = {
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
    type: "post";
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

export type QuestionType = {
    author_id: string;
    author_name: string;
    created_at: Date;
    text: string;
    answers: Answer[];
    followers: string[];
    pass: boolean;
    type: "question";
}


export type currentUserType = {
    about_me: string;
    answers_given: number;
    batch_year: number;
    email: string;
    followers: string[];
    followings: string[];
    full_name: string;
    major: string;
    join_date: Date;
    level: number;
    profile_pic: string;
    questions_asked: number;
    location: string;
    topics_followed: string[];
    username: string;
};