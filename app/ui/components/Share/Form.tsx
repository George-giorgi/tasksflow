"use client";

import { useState, useEffect, FormEvent } from "react";
import { createEmployee, updateEmployee } from "@/app/utils/actions";

type FormProps = {
  id?: string;
  title?: string;
  name?: string;
  surname?: string;
  email?: string;
  mobile?: string | null;
};

export default function Form({
  id,
  title,
  name,
  surname,
  email,
  mobile,
}: FormProps) {
  // Initialize state with the incoming prop values
  const [formState, setFormState] = useState({
    name: name || "",
    surname: surname || "",
    email: email || "",
    mobile: mobile || "",
  });

  // Update the state when the prop values change
  useEffect(() => {
    setFormState({
      name: name || "",
      surname: surname || "",
      email: email || "",
      mobile: mobile || "",
    });
  }, [name, surname, email, mobile]);

  // Handle input changes to update the state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // Create a FormData object from the form
    const formData = new FormData(e.currentTarget);
    // e.preventDefault();
    if (title == "Edit") {
      const result = await updateEmployee(id, formData);

      if (result.success) {
        window.alert("Employee Updated successfully!");
      } else {
        window.alert("Failed to Update employee.");
      }
    }

    if (title == "Add") {
      const result = await createEmployee(formData);
      if (result.success) {
        window.alert("Employee added successfully!");
      } else {
        window.alert("Failed to add employee.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[50%] !mt-10">
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-blue-500 outline-none"
          value={formState.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-blue-500 outline-none"
          value={formState.surname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-blue-500 outline-none"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-blue-500 outline-none"
          value={formState.mobile}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-white text-black py-2 px-4 hover:bg-gray-200 cursor-pointer !mt-4"
        >
          {title}
        </button>
      </div>
    </form>
  );
}
