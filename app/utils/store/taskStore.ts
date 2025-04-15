import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Task } from "../definitions/task/definitions";

type TaskStore = {
  task: Task | null;
  setTask: (task: Task | undefined) => void;
  updateTask: (updatedTask: Partial<Task>) => void;
  clearTask: () => void;
};

export const useTaskStore = create<TaskStore>()(
  devtools(
    persist(
      (set, get) => ({
        task: null,
        setTask: (task) => set({ task }),
        updateTask: (updatedTask) =>
          set((state) => ({
            task: { ...state.task, ...updatedTask } as Task,
          })),
        clearTask: () => set({ task: null }),
      }),
      {
        name: "task-storage", // localStorage key
      }
    )
  )
);
