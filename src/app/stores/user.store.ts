import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserStoreProps {
  id: number | null;
  name: string | null;
  setUser: (user: { id: number; name: string }) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStoreProps>()(
  persist(
    (set) => ({
      name: null,
      id: null,
      setUser: (user) => set({ id: user.id, name: user.name }),
      clearUser: () => set({ id: null, name: null }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
