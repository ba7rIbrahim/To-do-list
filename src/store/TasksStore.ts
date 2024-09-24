import { create } from "zustand";
import { persist } from "zustand/middleware";
import uuid4 from "uuid4";

type Task = {
  taskID: string
  taskName: string
  taskDescription?: string
  completed: boolean
}

type TaskState = {
  tasks: Task[]
  addTask: (taskName: string, taskDEscription: string) => void
  checkTask: (taskID: string) => void
  removeTask: (taskID: string) => void
  editTask: (taskID: string, taskName: string, taskDescription: string) => void
  setTasks: (tasks: Task[]) => void;
}

export const useTasksStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (taskName, taskDescription) => {
        set((state) => {
          return { tasks: [...state.tasks, { taskName: taskName, taskDescription: taskDescription, taskID: uuid4(), completed: false }] }
        })
      },
      checkTask: (id) => {
        set((state) => {
          const updateTasks = state.tasks.map((task) => {
            return task.taskID === id ? { ...task, completed: !task.completed } : task
          })
          return { tasks: updateTasks };
        })
      },
      removeTask: (taskID) => {
        set((state) => {
          const updateTasks = state.tasks.filter((task) => task.taskID !== taskID)
          return { tasks: updateTasks }
        });
      },
      editTask: (taskID, taskName, taskDescription) => {
        set((state) => {
          const updateTask = state.tasks.map((task) => {
            return task.taskID == taskID ? { ...task, taskName: taskName, taskDescription: taskDescription } : task
          });
          return { tasks: updateTask }
        });
      },
      setTasks: (tasks) => set({ tasks }),
    }),
    {
      name: 'tasks-storage',
    }
  )
)



