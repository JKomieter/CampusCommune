import { Spinner } from "@nextui-org/react";


const AddUserLoader = () => {
    return (
        <div className="flex items-center justify-center gap-4 p-32 flex-col">
            <Spinner color="primary" size="lg" />
            <h4 className="text-neutral-600 font-semibold md:text-base sm:text-sm text-xs w-full text-center">
                Adding you to the discussion...
            </h4>
        </div>
    )
}

export default AddUserLoader;