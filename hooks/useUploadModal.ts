import { create } from "zustand";

interface UploadModalStore {
    // state
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

};

const useUploadModal = create<UploadModalStore>((set) => ({
    // state
    isOpen: false,
    // actions
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;