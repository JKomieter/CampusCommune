import { create } from "zustand";


interface discussionSidebarStore {
    isSidebarOpen: boolean;
    toggleSidebar: (isSidebarOpen: boolean) => void;
}

export const useDiscussionSidebarStore = create<discussionSidebarStore>((set) => ({
    isSidebarOpen: false,
    toggleSidebar: (isSidebarOpen) => set({ isSidebarOpen }),
})) 