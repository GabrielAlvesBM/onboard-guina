import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserProps {
  id: number | null;
  name: string | null;
  setUser: (user: { id: number; name: string }) => void;
}

export const useUserStore = create<UserProps>()(
  persist(
    (set) => ({
      name: null,
      id: null,
      setUser: (user) => set({ id: user.id, name: user.name }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
