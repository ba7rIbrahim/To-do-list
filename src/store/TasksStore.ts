import { create } from "zustand";
import { persist } from "zustand/middleware";
import uuid4 from "uuid4";

export type Task = {
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
  completedTasks: () => Task[]
  uncompletedTasks: () => Task[]
}

export const useTasksStore = create<TaskState>()(
  persist(
    (set, get) => ({
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
      completedTasks: () => {
        return get().tasks.filter((task) => task.completed);
      },
      uncompletedTasks: () => {
        return get().tasks.filter((task) => !task.completed);
      },

    }),
    {
      name: 'tasks-storage',
    }
  )
)



