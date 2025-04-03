"use client";

import { useState, FormEvent } from "react";
import { createTasks } from "@/app/utils/actions";
import { resetTaskForm } from "@/app/utils/resetForm";
import { taskFields } from "@/app/utils/definitions/fields/definitions";
import { capitalize } from "@/app/utils/capitalize";
import { FormStateTasks } from "@/app/utils/definitions/form/definitions";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskIcon from "@mui/icons-material/Task";
import Button from "../Button/CustomButton";
import MessagesFromDb from "../Messages/MessagesFromDb";
export default function FormAdminAddTask() {
  const [tasks, setTasks] = useState<FormStateTasks[]>(resetTaskForm());
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState(false);

  const handleTaskChange = (
    index: number,
    field: keyof FormStateTasks,
    value: string
  ) => {
    setTasks((prev) => {
      const newTasks = [...prev];
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
      // Reset form tasks array
      setTasks(resetTaskForm());
      setMessage(result.message);
      setError(false);
    } else {
      // window.alert("Failed to add tasks.");
      setTasks(resetTaskForm());
      setMessage(result.message);
      setError(true);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className=" !mt-4">
        <MessagesFromDb error={!error} message={message} />
      </div>
      <form onSubmit={handleSubmit} method="POST" className="space-y-4 ">
        {tasks.map((task, index) => (
          <div
            key={index}
            className=" !mb-4 border-b-2 border-dashed border-[var(--smaltext-color)] rounded-lg"
          >
            {taskFields.map((field) => (
              <div key={`${index}-${field}`} className="space-y-4">
                <input
                  autoComplete="new-name"
                  type="text"
                  name={field}
                  placeholder={capitalize(field)}
                  className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-[var(--hover-color)] outline-none placeholder:text-sm rounded-lg"
                  value={(tasks[index] as any)[field]}
                  onChange={(e) =>
                    handleTaskChange(index, field, e.target.value)
                  }
                  autoFocus={field === "partNumber"}
                  // required
                />
              </div>
            ))}

            <Button
              key_title={"Delete"}
              className="  bg-[var(--hover-color)] text-[var(--smaltext-color)]  hover:text-white  !mb-4 "
              icon={<DeleteIcon fontSize="small" />}
              onClick={() => removeTask(index)}
            />
          </div>
        ))}
        <div className="flex items-center justify-center gap-2">
          <Button
            key_title={"Add"}
            className="bg-[var(--mainText-color)] text-[var(--smaltext-color)] hover:bg-[var(--success-color)] hover:text-[var(--mainText-colo)]"
            icon={<AddIcon fontSize="small" />}
            onClick={addTask}
          />

          <input type="hidden" name="tasks" value={JSON.stringify(tasks)} />
          {tasks.length >= 1 && (
            <div className=" flex items-center justify-center">
              {" "}
              <Button
                type={"submit"}
                key_title="Save"
                className="bg-[#FFCC00] text-[var(--smaltext-color)] hover:text-white"
                icon={<TaskIcon fontSize="small" />}
                taskQty={tasks.length}
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
