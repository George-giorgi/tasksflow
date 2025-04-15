import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User } from "../definitions/user/definitions";

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  resetUser: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        resetUser: () => set({ user: null }),
      }),
      {
        name: "user-storage", // localStorage key
      }
    )
  )
);
