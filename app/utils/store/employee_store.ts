import { create } from "zustand";

interface EmployeeState {
  employee: number;
  addEmployee: (qty: number) => void;
}

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employee: 0,
  addEmployee: (qty) => set((state) => ({ employee: state.employee + qty })),
}));
