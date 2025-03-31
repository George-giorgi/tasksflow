import Employees from "@/app/ui/components/Employee/Employees";
import Search from "@/app/ui/components/Search/Search";
import SearchedEmployeeList from "@/app/ui/components/Share/SearchedListsWrapper";

const Page = async (props: {
  searchParams?: Promise<{
    id?: string;
    query?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query;

  return (
    <div>
      <Search title={"Search Employee"} />

      <SearchedEmployeeList query={query} />
      {!query && <Employees />}
    </div>
  );
};

export default Page;
