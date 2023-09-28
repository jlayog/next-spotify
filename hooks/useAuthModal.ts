import { create } from "zustand";

interface AuthModalStore {
    // state
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

};

const useAuthModal = create<AuthModalStore>((set) => ({
    // state
    isOpen: false,
    // actions
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;