import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";


export const useSpaces = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current_user_spaces', fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    };
};