import {create} from 'zustand';

interface PostLoadingState {
    postLoading: boolean;
    setPostLoading: (postLoading: boolean) => void;
}

export const usePostLoadingStore = create<PostLoadingState>((set) => ({
    postLoading: false,
    setPostLoading: (postLoading: boolean) => set({postLoading}),
}));