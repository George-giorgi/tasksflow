"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { RegFormState } from "@/app/utils/definitions/form/definitions";
import { regfields } from "@/app/utils/definitions/fields/definitions";
import Button from "../Button/CustomButton";
import { capitalize } from "@/app/utils/capitalize";
import { getEmployeeById } from "@/app/utils/actions/actions";
import MessagesFromDb from "../Messages/MessagesFromDb";
import { registerUser } from "@/app/utils/actions/auth";

const Reg = () => {
  const [formState, setFormState] = useState<RegFormState>({
    name: "",
    email: "",
    password: "",
    repeatpassword: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if password and repeat password match
    if (formState.password !== formState.repeatpassword) {
      setMessage("Passwords do not match");
      setError(true);
      return;
    }

    // Create FormData object and append employeeId
    const formData = new FormData(e.currentTarget);
    formData.append("employeeId", id);

    // Send the data to your registration function
    const response = await registerUser(formData); // Register user logic (replace with your real function)

    if (response.success) {
      setMessage(response.message);
      setError(false); // No error
    } else {
      setMessage(response.message);
      setError(true); // Set error if the registration failed
    }
  };

  // Fetch employee data if ID is provided
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
    <div className="flex flex-col items-center justify-center pt-6">
      {/* Show messages from DB */}
      <MessagesFromDb message={message} error={!error} />
      <form onSubmit={handleSubmit} className="md:w-full w-[70%] space-y-5">
        {/* Map over form fields */}
        {regfields.map((field) => (
          <div key={field} className="space-y-2">
            <input
              autoComplete="new-password"
              type={
                field === "password" || field === "repeatpassword"
                  ? "password"
                  : "text"
              }
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
              autoFocus={field === "name"}
              readOnly={field === "name" || field === "email"}
              required
            />
          </div>
        ))}

        <Button
          type="submit"
          key_title={"Register"}
          className="bg-[var(--mainText-color)] text-[var(--smaltext-color)] hover:text-white hover:bg-[var(--success-color)] mt-5"
        />
      </form>
    </div>
  );
};

export default Reg;
