import { create } from "zustand";

type inputsState = {
  taskName: string
  setTaskName: (name: string) => void
  taskDescription: string
  setTaskDescription: (description: string) => void
}

export const useInputsStore = create<inputsState>((set) => ({
  taskName: '',
  setTaskName: (name) => set(() => ({ taskName: name })),
  taskDescription: '',
  setTaskDescription: (description) => set(() => ({ taskDescription: description }))
}))