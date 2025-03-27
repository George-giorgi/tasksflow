"use client";
import { useState, useEffect, FormEvent } from "react";
import { Task } from "@/app/utils/definitions";
import { updateTask } from "@/app/utils/actions";

const EditFormForTask = ({
  id,
  partNumber,
  description,
  descriptionFromEmployee,
  metalType,
  drawing,
  qty,
}: Task) => {
  const [fields, setFields] = useState({
    id: id || "",
    partNumber: partNumber || "",
    description: description || "",
    descriptionFromEmployee: descriptionFromEmployee || "",
    metalType: metalType || "",
    drawing: drawing || "",
    qty: qty || "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // Create a FormData object from the form
    const formData = new FormData(e.currentTarget);
    // e.preventDefault();

    const result = await updateTask(id, formData);

    if (result.success) {
      window.alert("Task Updated successfully!");
    } else {
      window.alert("Failed to Update Task.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFields((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setFields({
      id: id || "",
      partNumber: partNumber || "",
      description: description || "",
      descriptionFromEmployee: descriptionFromEmployee || "",
      metalType: metalType || "",
      drawing: drawing || "",
      qty: qty || "",
    });
  }, [
    partNumber,
    description,
    descriptionFromEmployee,
    metalType,
    drawing,
    qty,
  ]);

  return (
    <>
      <h1>Edit Form</h1>
      <form className="space-y-4 p-4 bg-gray-900" onSubmit={handleSubmit}>
        <div>
          <label>Part Number:</label>
          <input
            type="text"
            name="partNumber"
            value={fields.partNumber}
            placeholder="Part Number"
            className="border p-1 ml-2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={fields.description}
            placeholder="Description"
            className="border p-1 ml-2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description From Employee:</label>
          <input
            type="text"
            name="descriptionFromEmployee"
            value={fields.descriptionFromEmployee}
            placeholder="Description From Employee"
            className="border p-1 ml-2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Metal Type:</label>
          <input
            type="text"
            name="metalType"
            value={fields.metalType}
            placeholder="Metal Type"
            className="border p-1 ml-2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Drawing:</label>
          <input
            type="text"
            name="drawing"
            value={fields.drawing}
            placeholder="Drawing"
            className="border p-1 ml-2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="qty"
            value={fields.qty}
            placeholder="Quantity"
            className="border p-1 ml-2"
            onChange={handleChange}
          />
        </div>

        <button
          className="bg-yellow-500  cursor-pointer pl-4 pr-4 rounded-md"
          type="submit"
        >
          Edit
        </button>
      </form>
    </>
  );
};

export default EditFormForTask;
