import { searchEmployees } from "@/app/utils/actions";
import OneEmployee from "./OneEmployee";

const EmployeeList = async ({ querystring }: { querystring: string }) => {
  const { success, employees, message } = await searchEmployees(querystring);

  if (!success || employees?.length === 0) {
    return (
      <div className=" h-10 !mt-10 flex items-center justify-center ">
        <p className=" text-sm">{message}</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center !mt-[48px]">
      <div className="flex flex-col gap-2 max-h-60 overflow-scroll ">
        {employees?.map((empl) => (
          <OneEmployee key={empl.id} {...empl} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
