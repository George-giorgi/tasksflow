import Employee from "./Employee";
import { getLastTenEmployees } from "@/app/utils/emplactions";

import { SearchResultEmployee } from "@/app/utils/definitions";

const Employees = async () => {
  const latestEmployess: SearchResultEmployee = await getLastTenEmployees();

  return (
    <div>
      {latestEmployess.map((empl) => {
        return <Employee key={empl.id} employee={empl} />;
      })}
    </div>
  );
};

export default Employees;
