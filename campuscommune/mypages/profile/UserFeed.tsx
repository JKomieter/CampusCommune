import FeedSkeleton from "@/components/FeedSkeleton";
import PostItem from "@/components/PostItem";
import QuestionItem from "@/components/QuestionItem";
import { FeedType, PostType, QuestionType } from "@/types";



const UserFeed = ({
    feed
}: {
    feed: (PostType | QuestionType)[]
}) => {

    if (feed.length === 0) return (
        <div className="md:w-[60%] mt-4">
            <FeedSkeleton />
        </div>
    );

    feed = feed.sort((a, b) => {
        return a.created_at > b.created_at ? -1 : 1;
    });

    return (
        <div className="w-full h-full md:w-[60%] flex flex-col gap-4 mt-4">
            {feed.map((post) =>
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
                            handleUpvote={() => { } }
                            id={""}
                            currentUserEmail={(post as PostType).author_email}
                            currentUserPhoto={(post as PostType).author_photo}
                            currentUserFullname={(post as PostType).author_name} category={[]}                        />
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
                                currentUserEmail={(post as QuestionType).author_email} 
                                id={""}                       
                        />
                    )}
                </div>
            )}
        </div>
    )
};

export default UserFeed;