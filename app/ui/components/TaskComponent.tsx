import { searchOneTasks } from "@/app/utils/definitions";
export default function TaskComponent({
  id,
  partNumber,
  description,
  descriptionFromEmployee,
  metalType,
  drawing,
  qty,
  createdAt,
  updatedAt,
}: searchOneTasks) {
  return (
    <div className=" flex p-4 border rounded shadow-sm">
      <h3 className="font-bold mb-2">Task ID: {id}</h3>
      <p>
        <strong>Part Number:</strong> {partNumber}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Description From Employee:</strong> {descriptionFromEmployee}
      </p>
      <p>
        <strong>Metal Type:</strong> {metalType}
      </p>
      <p>
        <strong>Drawing:</strong> {drawing}
      </p>
      <p>
        <strong>Quantity:</strong> {qty}
      </p>
      <p>
        <strong>Created:</strong> {new Date(createdAt).toLocaleString()}
      </p>
      <p>
        <strong>Updated:</strong> {new Date(updatedAt).toLocaleString()}
      </p>

      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
        Delete
      </button>
    </div>
  );
}
