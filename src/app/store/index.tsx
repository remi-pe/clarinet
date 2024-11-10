import {create} from "zustand";

type Store = {
  generatedCode: string | null;
  setGeneratedCode: (code: string) => void;
  isProcessing: boolean;
  setIsProcessing: (isProcessing: boolean) => void;
};

export const useStore = create<Store>()((set) => ({
  generatedCode: null,
  setGeneratedCode: (code: string) => set(() => ({generatedCode: code})),
  isProcessing: false,
  setIsProcessing: (isProcessing: boolean) => set(() => ({isProcessing})),
}));
