import { create } from "zustand";

// this controls the openning and closing of the ask modal
interface AskModalState {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}


export const useAskModalStore = create<AskModalState>((set) => ({
    isOpen: false,
    setOpen: (isOpen) => set({ isOpen }),
}));


