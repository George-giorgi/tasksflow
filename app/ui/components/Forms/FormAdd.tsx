"use client";
import { FormState } from "@/app/utils/definitions/definitions";
import { useState, FormEvent } from "react";

import { createEmployee } from "@/app/utils/actions";
import { resetForm } from "@/app/utils/resetForm";
import AddIcon from "@mui/icons-material/Add";

export default function FormAdd() {
  // Initialize state with the incoming prop values
  const [formState, setFormState] = useState<FormState>({
    name: "",
    surname: "",
    email: "",
    mobile: "",
  });
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
    <div className=" flex flex-col items-center justify-center">
      <div className=" flex justify-center items-center h-12 text-sm md:text-base ">
        <p
          className={
            !error ? "text-[var(--error-color)]" : "text-[var(--success-color)]"
          }
        >
          {message}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="md:w-[40%] w-[70%] ">
        <div className="space-y-4">
          <input
            autoComplete="new-name"
            type="text"
            name="name"
            placeholder="Name"
            className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-[var(--hover-color)] outline-none placeholder:text-sm rounded-lg"
            value={formState.name}
            onChange={(e) =>
              setFormState((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            autoFocus
            required
          />
          <input
            autoComplete="new-name"
            type="text"
            name="surname"
            placeholder="Surname"
            className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-[var(--hover-color)] rounded-lg outline-none placeholder:text-sm"
            value={formState.surname}
            onChange={(e) =>
              setFormState((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            required
          />
          <input
            autoComplete="new-name"
            type="email"
            name="email"
            placeholder="Email"
            className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-[var(--hover-color)] rounded-lg outline-none placeholder:text-sm"
            value={formState.email}
            onChange={(e) =>
              setFormState((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            required
          />
          <input
            autoComplete="new-name"
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-[var(--hover-color)] rounded-lg outline-none placeholder:text-sm"
            value={formState.mobile ?? ""}
            onChange={(e) =>
              setFormState((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            required
          />
          <button
            type="submit"
            className=" flex items-center justify-center w-20 rounded-lg bg-white py-1 px-4 text-[var(--smaltext-color)] hover:text-white hover:bg-[var(--hover-color)] cursor-pointer !mt-4 transition "
          >
            <span className="   font-semibold text-sm">
              {isPending ? (
                "Loading"
              ) : (
                <span className="flex items-center justify-center">
                  Add <AddIcon fontSize="small" />
                </span>
              )}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
