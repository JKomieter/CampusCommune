import DiscussionCategory from "./DiscussionCategory";
import DiscussionsList from "./DiscussionsList";

const Discussion = () => {
    return (
        <div className="w-full">
            <DiscussionCategory />
            <DiscussionsList />
        </div>
    )
}

export default Discussion;