import { create } from "zustand";
import { SearchResult } from "../gallery/page";

type ModalStore = {
    image: SearchResult;
    setImage: (image: SearchResult) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
    image: {} as SearchResult,
    setImage: (image: SearchResult) => set({ image }),
}));