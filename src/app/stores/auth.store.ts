import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthStoreProps {
  token: string | null;
  setAuth: (token: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthStoreProps>()(
  persist(
    (set) => ({
      token: null,
      setAuth: (token) => set({ token: token }),
      clearAuth: () => set({ token: null }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
