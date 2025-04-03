"use client";

import { FormState } from "@/app/utils/definitions/form/definitions";

import { useState, FormEvent } from "react";

import { createEmployee } from "@/app/utils/actions";
import { resetForm } from "@/app/utils/resetForm";

import { employeeFields } from "@/app/utils/definitions/fields/definitions";
import { capitalize } from "@/app/utils/capitalize";
import MessagesFromDb from "../Messages/MessagesFromDb";
import Button from "../Button/CustomButton";
import AddIcon from "@mui/icons-material/Add";

export default function FormAdd() {
  // Initialize state with the incoming prop values
  const [formState, setFormState] = useState<FormState>(resetForm());
  const [message, setMessage] = useState<string>("");
  const [isPending, SetisPending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // after true
    SetisPending(true);
    setMessage("");
    const formData = new FormData(e.currentTarget);
    const result = await createEmployee(formData);

    if (result.success) {
      // true
      setError(result.success);

      // get message from query success
      setMessage(result.message);
    } else {
      // false
      setError(result.success);
      // get message from query fail
      setMessage(result.message);
    }
    // after false
    SetisPending(false);
    setFormState(resetForm());
  };

  return (
    <div className="  flex flex-col items-center justify-center pt-3">
      <MessagesFromDb message={message} error={error} />

      <form onSubmit={handleSubmit} className="md:w-full w-[70%] ">
        {employeeFields.map((field) => (
          <div key={field} className="space-y-4">
            <input
              autoComplete="new-name"
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={capitalize(field)}
              className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-[var(--hover-color)] outline-none placeholder:text-sm rounded-lg"
              value={(formState as any)[field]}
              onChange={(e) =>
                setFormState((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              autoFocus={field == "name"}
              required
            />
          </div>
        ))}

        <Button
          type="submit"
          key_title={"add"}
          isPending={isPending}
          className=" bg-[var(--mainText-color)] text-[var(--smaltext-color)] hover:text-white hover:bg-[var(--success-color)] !mt-5 "
          icon={<AddIcon fontSize="small" />}
        />
      </form>
    </div>
  );
}
