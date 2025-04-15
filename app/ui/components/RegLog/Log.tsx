"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { LogFormState } from "@/app/utils/definitions/form/definitions";
import { logfields } from "@/app/utils/definitions/fields/definitions";
import Button from "../Button/CustomButton";
import { capitalize } from "@/app/utils/capitalize";
import { getEmployeeById } from "@/app/utils/actions/actions";
import MessagesFromDb from "../Messages/MessagesFromDb";
import { loginUser } from "@/app/utils/actions/auth";
import { useUserStore } from "@/app/utils/store/useUserStore";
import { LoginRounded } from "@mui/icons-material";

const Log = () => {
  const [formState, setFormState] = useState<LogFormState>({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const { push } = useRouter();
  const { user, setUser } = useUserStore();
  console.log(user);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(e.currentTarget);

    // Call the login user function
    const resp = await loginUser(formData);

    if (resp.success && resp.user) {
      setMessage(resp.message);
      setError(false); // No error
      // main action  update userstate
      setUser(resp.user);
      push("/");
    } else {
      setMessage(resp.message);
      setError(true); // Set error if the registration failed
    }
  };

  useEffect(() => {
    if (!id) return;

    (async () => {
      const { success, employee, message } = await getEmployeeById(id);
      if (success && employee) {
        setFormState((prev) => ({
          ...prev,
          name: employee.name || "",
          email: employee.email || "",
        }));
      } else {
        setMessage(message || "Employee not found");
        setError(true);
      }
    })();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center pt-3">
      <MessagesFromDb message={message} error={!error} />

      <form onSubmit={handleSubmit} className="md:w-full w-[70%]">
        {logfields.map((field) => (
          <div key={field} className="space-y-4">
            <input
              autoComplete={field === "email" ? "email" : "current-password"}
              type={field === "password" ? "password" : "text"}
              name={field}
              placeholder={capitalize(field)}
              className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-[var(--hover-color)] outline-none placeholder:text-sm rounded-lg"
              value={formState[field as keyof LogFormState]}
              onChange={(e) =>
                setFormState((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              // autoFocus={field === "password"}
              readOnly={field === "email" || field === "name"} // Ensure readonly for email if fetched from employee data
              required
            />
          </div>
        ))}

        <Button
          type="submit"
          key_title="LogIn"
          className="bg-[var(--mainText-color)] text-[var(--smaltext-color)] hover:text-white hover:bg-[var(--success-color)] !mt-5"
        />
      </form>
    </div>
  );
};

export default Log;
