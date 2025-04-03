"use client";

import { useEffect, useState, FormEvent } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { findTaskById, updateTask, deleteTask } from "@/app/utils/actions";
import MessagesFromDb from "../Messages/MessagesFromDb";

import {
  FormState,
  FormStateTasks,
} from "@/app/utils/definitions/form/definitions";
import { resetForm, resetTaskForm } from "@/app/utils/resetForm";

import {
  employeeFields,
  taskFields,
} from "@/app/utils/definitions/fields/definitions";
import Button from "../Button/CustomButton";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";

export default function FormAdminEditDeleteTask() {
  const [formState, setFormState] = useState<FormStateTasks>(
    resetTaskForm()[0]
  );
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const taskId = searchParams.get("id") ?? "";

  useEffect(() => {
    if (!taskId) return;

    (async () => {
      setIsLoading(true);
      const res = await findTaskById(taskId);

      if (res.success && res.task) {
        setFormState({
          partNumber: res.task.partNumber ?? "",
          description: res.task.description ?? "",
          metalType: res.task.metalType ?? "",
          qty: res.task.qty ?? "",
          taskFor: res.task.taskFor ?? "",
          drawing: res.task.drawing ?? "",
        });
      } else {
        setMessage(res.message || "Employee not found");
        setError(true);
      }
      setIsLoading(false);
    })();
  }, [taskId]);

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!taskId) return;

    setIsPending(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    formData.append("id", taskId);

    const result = await updateTask(formData);
    if (result.success) {
      setFormState(resetTaskForm()[0]);
    }

    setError(!result.success);
    setMessage(result.message);
    setIsPending(false);
    replace(pathname);
  };

  const handleDelete = async () => {
    if (!taskId) return;

    setIsPending(true);

    const result = await deleteTask(taskId);

    if (result.success) {
      setFormState(resetTaskForm()[0]);
    }
    setError(!result.success);
    setMessage(result.message);

    setIsPending(false);
    replace(pathname);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <MessagesFromDb message={message} error={!error} />

      <div className="w-[80%] flex items-center justify-center">
        <form
          onSubmit={handleUpdate}
          className="space-y-4 w-full flex flex-col justify-center items-center"
        >
          {taskFields.map((field) => (
            <div
              key={field}
              className="relative flex items-center justify-center w-[70%]"
            >
              <input
                name={field}
                type={field}
                placeholder={
                  isLoading
                    ? `Loading ${
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }...`
                    : field.charAt(0).toUpperCase() + field.slice(1)
                }
                className={`bg-transparent border-b-2 border-white py-2 px-3 rounded-lg placeholder:text-sm outline-none w-full ${
                  isLoading ? "bg-gray-800 animate-pulse text-transparent" : ""
                }`}
                value={(formState as any)[field]}
                disabled={isLoading}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                required
                autoComplete="off"
              />
              {isLoading && (
                <div className="absolute top-2 left-3 text-gray-400 text-sm pointer-events-none">
                  Loading...
                </div>
              )}
            </div>
          ))}

          <div className="md:w-[70%] flex gap-4">
            <Button
              type="submit"
              key_title="update"
              className="bg-[#FFCC00] text-[var(--smaltext-color)] hover:text-white"
              icon={<UpdateIcon fontSize="small" />}
              isPending={isPending}
            />

            <Button
              type="button"
              key_title="delete"
              className="bg-[var(--hover-color)] text-[var(--smaltext-color)] hover:text-white"
              icon={<DeleteIcon fontSize="small" />}
              isPending={isPending}
              onClick={handleDelete}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
