import { create } from "zustand";

type DialogState = {
  isOpen: boolean
  setIsOpen: (bol: boolean) => void
  isSubmitting: boolean
  setIsSubmitting: (bol: boolean) => void
  isOpenEditDialog: boolean
  setOpenEditDialog: (bol: boolean) => void
}

export const useDialogInfoStore = create<DialogState> ((set) => ({
  isOpen: false,
  setIsOpen: (bol) => set(() => ({isOpen: bol})),
  isSubmitting: false,
  setIsSubmitting: (bol) => set(() => ({isSubmitting: bol})),
  isOpenEditDialog: false,
  setOpenEditDialog: (bol) => set(() => ({isOpenEditDialog: bol})),
}))
