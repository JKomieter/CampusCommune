// Type definitions for Campus Commune


export type FeedType = PostType | QuestionType;

export type PostType = {
    id: string;
    author_id: string;
    author_name: string;
    author_major: string;
    author_email: string;
    author_year: number;
    author_photo: string;
    title: string;
    body: string;
    created_at: Date;
    upvotes: string[];
    downvotes: number;
    tags: string[];
    image: string;
    answers: Answer[];
    type: "post";
    category: string[];
}

export type Comment = {
    author_name: string;
    body: string;
    created_at: any;
    author_photo: string;
    author_email: string;
    downvotes: Array<string>;
    upvotes: Array<string>;
    replies: Array<Comment>;
    post_title: string;
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
    upvotes: string[];
    downvotes: number;
    answers: Answer[];
    handleUpvote: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, post_title: string) => void;
    title: string;
    comments: Comment[];
}

export type QuestionType = {
    id: string;
    author_id: string;
    author_name: string;
    author_email: string;
    created_at: Date;
    text: string;
    answers: Answer[];
    followers: Follower[];
    pass: boolean;
    type: "question";
}

export type Follower = {
    user_email: string;
    created_at: Date;
}


export type currentUserType = {
    id: string;
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
    interests: string[];
};

type Participants = {
    user_name: string;
    user_email: string;
    user_photo: string;
}

export type DiscussionMessage = {
    sender_name: string;
    sender_email: string;
    sender_photo: string;
    text: string;
    created_at: Date;
    multimedia: {
        image: string;
        video: string;
        audio: string;
    };
}

export interface DiscussionType {
    title: string;
    description: string;
    category: string[];
    admin: {
        user_name: string;
        user_email: string;
        user_photo: string;
    },
    participants: Participants[];
    views: number;
    code: string;
}

export interface DiscussionListType {
    title: string;
    description: string;
    category: string[];
    participants: Participants[];
    views: number;
    code: string;
}

export type SpaceType = {
    name: string;
    description: string;
    category: string[];
    admin: Participants;
    contributors: {
        user_name: string;
        user_email: string;
        user_photo: string;
        user_role: string;
    }[];
    space_photo: string;
    created_at: Date;
    icon: string;
}

export type NoteType = {
    author_email: string;
    author_name: string;
    author_photo: string;
    category: string[];
    created_at: Date;
    description: string;
    title: string;
    media_name: string;
    media_path: string;
    type: string;
    course: string;
};

export type NotificationType = {
    id: string;
    sender_email: string;
    sender_name: string;
    recipient_email: string;
    sender_photo: string;
    post_title: string;
    created_at: {
        seconds: number;
        nanoseconds: number;
    };
    seen: boolean;
    type: string;
    link: string;
};