"use client";

import { createEmployee } from "@/app/utils/actions";

const Form = ({ title }: { title: string }) => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await createEmployee(formData);

    if (result.success) {
      window.alert("Employee added successfully!");
    } else {
      window.alert("Failed to add employee.");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className=" w-[50%] !mt-10">
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-blue-500 outline-none"
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-blue-500 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-blue-500 outline-none"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-blue-500 outline-none"
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
};

export default Form;
