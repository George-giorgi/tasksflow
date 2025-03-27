"use client";

import { useState, FormEvent } from "react";
import { createTasks } from "@/app/utils/actions";
import { Task } from "@/app/utils/definitions";

export default function AdminTaskForm() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      partNumber: "",
      description: "",
      descriptionFromEmployee: "",
      metalType: "",
      drawing: "",
      qty: 0,
    },
  ]);

  const handleTaskChange = (
    index: number,
    field: keyof Task,
    value: string
  ) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index] = {
        ...newTasks[index],
        [field]: field === "qty" ? Number(value) : value,
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
        descriptionFromEmployee: "",
        metalType: "",
        drawing: "",
        qty: 0,
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
      if (tasks.length > 1) {
        window.alert("Tasks added successfully!");
      } else {
        window.alert("Task added successfully!");
      }
      // for reset form
      setTasks([
        {
          partNumber: "",
          description: "",
          descriptionFromEmployee: "",
          metalType: "",
          drawing: "",
          qty: 0,
        },
      ]);
    } else {
      window.alert("Failed to add tasks.");
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST" className="space-y-4 p-4">
      {tasks.map((task, index) => (
        <div key={index} className="border p-4 rounded mb-4">
          <div>
            <label>Part Number:</label>
            <input
              type="text"
              value={task.partNumber}
              onChange={(e) =>
                handleTaskChange(index, "partNumber", e.target.value)
              }
              placeholder="Part Number"
              className="border p-1 ml-2"
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              value={task.description}
              onChange={(e) =>
                handleTaskChange(index, "description", e.target.value)
              }
              placeholder="Description"
              className="border p-1 ml-2"
            />
          </div>
          <div>
            <label>Description From Employee:</label>
            <input
              type="text"
              value={task.descriptionFromEmployee}
              onChange={(e) =>
                handleTaskChange(
                  index,
                  "descriptionFromEmployee",
                  e.target.value
                )
              }
              placeholder="Description From Employee"
              className="border p-1 ml-2"
            />
          </div>
          <div>
            <label>Metal Type:</label>
            <input
              type="text"
              value={task.metalType}
              onChange={(e) =>
                handleTaskChange(index, "metalType", e.target.value)
              }
              placeholder="Metal Type"
              className="border p-1 ml-2"
            />
          </div>
          <div>
            <label>Drawing:</label>
            <input
              type="text"
              value={task.drawing}
              onChange={(e) =>
                handleTaskChange(index, "drawing", e.target.value)
              }
              placeholder="Drawing"
              className="border p-1 ml-2"
            />
          </div>
          <div>
            <label>Quantity:</label>
            <input
              type="number"
              value={task.qty}
              onChange={(e) => handleTaskChange(index, "qty", e.target.value)}
              placeholder="Quantity"
              className="border p-1 ml-2"
            />
          </div>
          <button
            type="button"
            onClick={() => removeTask(index)}
            className="bg-red-500 text-white p-2 mt-2"
          >
            Remove Task
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addTask}
        className="bg-blue-500 text-white p-2"
      >
        Add Task
      </button>
      {/* 
        Pass the entire tasks array as a hidden input.
        JSON.stringify converts the tasks array into a JSON string,
        which the server action will parse.
      */}
      <input type="hidden" name="tasks" value={JSON.stringify(tasks)} />
      <button type="submit" className="bg-green-500 text-white p-2 mt-4 block">
        Submit All Tasks
      </button>
    </form>
  );
}
