import { deleteEmployee } from "@/app/utils/actions";

export const Employeees = ({
  deletee,
  id,
  name,
  surname,
  email,
  mobile,
}: {
  deletee?: boolean;
  id: string;
  name?: string;
  surname?: string;
  email?: string;
  mobile?: string | null;
}) => {
  const handleDeleteClick = async (id: string) => {
    const deleteResult = await deleteEmployee(id);
    if (deleteResult) {
      window.alert("Employeee delete secssesfully");
    } else {
      window.alert("Something wrong for delete");
    }
  };
  return (
    <div className=" flex gap-3 items-center justify-center  cursor-pointer ">
      <p>{name}</p>
      <p>{surname}</p>
      <p>{email}</p>
      <p>{mobile}</p>

      {deletee && (
        <form onSubmit={() => handleDeleteClick(id)}>
          <button className="text-white bg-red-400" type="submit">
            delete
          </button>
        </form>
      )}
    </div>
  );
};
