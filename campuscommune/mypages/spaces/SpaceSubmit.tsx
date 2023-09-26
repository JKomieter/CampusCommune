import useGetCurrentUser from "@/hooks/useGetCurrentUser";
import { SpaceType } from "@/types";
import { Avatar } from "@nextui-org/react";


const SpaceSubmit = ({space}: {space: SpaceType}) => {
    const { currentUser } = useGetCurrentUser();

    return (
        <div className="w-full flex flex-row items-center gap-2 bg-white rounded-2xl p-2 shadow-md">
            <Avatar 
                size="md"
                src={currentUser?.profile_pic || ""}
            />
            <input
                className="w-full p-2 bg-neutral-200 rounded-2xl outline-none"
                placeholder={`Submit to ${space?.name}`}
            />
        </div>
    )
};

export default SpaceSubmit;