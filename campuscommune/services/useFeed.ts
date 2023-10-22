import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';

export const useFeed = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/feed', fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    };
}