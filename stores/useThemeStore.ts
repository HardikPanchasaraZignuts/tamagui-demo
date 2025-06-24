import { create } from "zustand";


type ThemeName = "light" | "dark" | "dark_red" | "light_blue";

type ThemeState = {
    theme: ThemeName;
    toggleTheme: () => void;
    setTheme: (theme: ThemeName) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
  setTheme: (theme) => set({ theme }),
}));