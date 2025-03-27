import Employees from "@/app/ui/components/employee/Employees";
import Search from "@/app/ui/components/Share/Search";
import SearchedEmployeeList from "@/app/ui/components/employee/SearchedEmployeList";
import { searchEmployees } from "@/app/utils/actions";
import { SearchResultEmployee } from "@/app/utils/definitions";

const Page = async (props: {
  searchParams?: Promise<{
    id?: string;
    query?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query;
  const employeelist: SearchResultEmployee = await searchEmployees(query);

  return (
    <div>
      <Search title={"Search Employee"} />

      <SearchedEmployeeList searchedList={employeelist} />
      {!query && <Employees />}
    </div>
  );
};

export default Page;
