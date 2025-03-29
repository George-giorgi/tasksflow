import { SearchResultEmployee } from "@/app/utils/definitions";
import { searchEmployees } from "@/app/utils/actions";
import Employee from "./Employee";
const SearchedEmployeeList = async ({ query }: { query?: string }) => {
  const searchedEmployee: SearchResultEmployee = await searchEmployees(query);
  console.log(query);

  return (
    <div className=" bg-amber-600 !mb-12">
      <p>list search yourself</p>
      {searchedEmployee?.map((oneempl) => {
        return <Employee key={oneempl.id} employee={oneempl} />;
      })}
    </div>
  );
};

export default SearchedEmployeeList;
