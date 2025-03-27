import { searchOneTasks } from "@/app/utils/definitions";
import { deleteTask } from "@/app/utils/actions";
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
  const handleDeleteClick = async (id: string) => {
    const result = await deleteTask(id);
    if (result.success) {
      window.alert("Task Delete successfully!");
    } else {
      window.alert("Failed to Delete Task.");
    }
  };
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
      <form
        onSubmit={() => handleDeleteClick(id)}
        className=" flex bg-red-400  text-white pl-3 pr-3 rounded"
      >
        <button>Delete</button>
      </form>
    </div>
  );
}
