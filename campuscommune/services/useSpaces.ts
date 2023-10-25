import useSWR from "swr";
import { fetcher } from "../utils/fetcher";


// get all spaces
export const useSpaces = (user_email: string) => {
    const { data, error, isLoading, mutate } = useSWR(`/api/spaces/${user_email}`, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};