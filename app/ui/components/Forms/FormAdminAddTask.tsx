"use client";

import { useState, FormEvent } from "react";
import { createTasks } from "@/app/utils/actions";
import { resetTaskForm } from "@/app/utils/resetForm";
import { taskFields } from "@/app/utils/definitions/fields/definitions";
import { capitalize } from "@/app/utils/capitalize";
import { FormStateTasks } from "@/app/utils/definitions/form/definitions";

export default function FormAdminAddTask() {
  const [tasks, setTasks] = useState<FormStateTasks[]>(resetTaskForm());

  const handleTaskChange = (
    index: number,
    field: keyof FormStateTasks,
    value: string
  ) => {
    setTasks((prev) => {
      const newTasks = [...prev]; // Create a shallow copy of tasks array
      newTasks[index] = {
        ...newTasks[index],
        [field]: value,
      };
      return newTasks;
    });
  };

  const addTask = () => {
    setTasks((prev) => [
      ...prev,
      {
        partNumber: "",
        description: "",
        metalType: "",
        drawing: "",
        qty: "",
        taskFor: "",
      },
    ]);
  };

  const removeTask = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await createTasks(formData);
    if (result.success) {
      window.alert(
        tasks.length > 1
          ? "Tasks added successfully!"
          : "Task added successfully!"
      );
      // Reset form tasks array
      setTasks([
        {
          partNumber: "",
          description: "",
          metalType: "",
          drawing: "",
          qty: "",
          taskFor: "",
        },
      ]);
    } else {
      window.alert("Failed to add tasks.");
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST" className="space-y-4 p-4">
      {tasks.map((task, index) =>
        taskFields.map((field) => (
          <div key={`${index}-${field}`} className="space-y-4">
            <input
              autoComplete="new-name"
              type="text"
              name={field}
              placeholder={capitalize(field)}
              className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-[var(--hover-color)] outline-none placeholder:text-sm rounded-lg"
              value={(tasks[index] as any)[field]}
              onChange={(e) => handleTaskChange(index, field, e.target.value)}
              autoFocus={field === "partNumber"}
              required
            />
          </div>
        ))
      )}

      <button
        type="button"
        onClick={addTask}
        className="bg-blue-500 text-white p-2"
      >
        Add Task
      </button>
      <input type="hidden" name="tasks" value={JSON.stringify(tasks)} />
      <button type="submit" className="bg-green-500 text-white p-2 mt-4 block">
        Submit All Tasks
      </button>
    </form>
  );
}
