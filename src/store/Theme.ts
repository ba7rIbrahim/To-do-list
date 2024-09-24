import { create } from "zustand";

type ThemeType = {
  theme: string
  changeTheme: (theme: string) => void
}

export const useThemeStore = create<ThemeType>((set) => ({
  theme: 'dark',
  changeTheme: (theme) => set(() => ({ theme: theme === 'light' ? 'dark' : 'light'}))
}));