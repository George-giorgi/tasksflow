import { searchEmployees } from "@/app/utils/actions";
import OneEmployee from "./OneEmployee";

const EmployeeList = async ({ querystring }: { querystring: string }) => {
  const { success, employees, message } = await searchEmployees(querystring);

  if (!success || employees?.length === 0) {
    return (
      <div className=" h-12 flex items-center justify-center ">
        <p className=" text-sm">{message}</p>
      </div>
    );
  }

  return (
    <div className=" w-full flex items-center justify-center ">
      <div className=" w-[70%] flex flex-col gap-2 max-h-60 overflow-scroll ">
        {employees?.map((empl) => (
          <OneEmployee key={empl.id} {...empl} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
