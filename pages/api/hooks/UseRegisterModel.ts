import { create } from "zustand";

interface UsergisterModelProps{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const UseRegisterModel = create<UsergisterModelProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default UseRegisterModel;