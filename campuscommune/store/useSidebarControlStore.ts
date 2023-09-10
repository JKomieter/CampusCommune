import { create } from "zustand";


interface SidebarControlStore {
    isSidebarOpen: boolean;
    toggleSidebar: (isSidebarOpen: boolean) => void;
}

export const useSidebarStore = create<SidebarControlStore>((set) => ({
    isSidebarOpen: false,
    toggleSidebar: (isSidebarOpen) => set({ isSidebarOpen }),
})) 