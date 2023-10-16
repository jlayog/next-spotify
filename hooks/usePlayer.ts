import { create } from 'zustand';

interface PlayerStore {
    ids: string[];
    activeId?: string;
    setId: (id: string) => void;
    setIds: (ids: string[]) => void;
    reset: () => void;
}

// Every time we click play, set list of IDs, which will play in a playlist based on current activeID
const usePlayer = create<PlayerStore>((set) => ({
    ids: [],
    activeId: undefined,
    setId: (id: string) => set({ activeId: id }),
    setIds: (ids: string[]) => set({ ids }),
    reset: () => set({ ids: [], activeId: undefined })
}));

export default usePlayer;

