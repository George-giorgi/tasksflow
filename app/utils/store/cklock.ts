import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Define the ClockState interface
export interface ClockState {
  in: boolean;
  out: boolean;
  sw: boolean;
  setClockStates: (updates: Partial<ClockState>) => void;
  resetClockStates: () => void;
}

// Initial state
const initialState = {
  in: true,
  out: false,
  sw: false,
};

// Create the store with devtools + persist middleware
export const useClockStore = create<ClockState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setClockStates: (updates) =>
          set((state) => ({
            ...state,
            ...updates,
          })),
        resetClockStates: () => set(initialState),
      }),
      {
        name: "clock-storage", // Key in localStorage
      }
    )
  )
);
