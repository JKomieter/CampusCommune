import DiscussionCategory from "./DiscussionCategory";
import DiscussionsList from "./DiscussionsList";

const Discussion = () => {
    return (
        <div className="w-full overflow-y-hidden">
            <DiscussionCategory />
            <DiscussionsList />
        </div>
    )
}

export default Discussion;