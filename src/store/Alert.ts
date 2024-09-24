import { create } from "zustand";

type AlertType = {
  alert: boolean
  showAlert: (show: boolean) => void
}
type TitleAlertType = {
  title: string
  alertTitle: (title: string) => void
}

export const useShowAlertStore = create<AlertType>((set) => ({
  alert: false,
  showAlert: (show) => set(() => ({ alert: show})),
}));

export const useTitleAlertStore = create<TitleAlertType>((set) => ({
  title: '',
  alertTitle: (title) => set((state) => ({ ...state, title: title }))
}));
