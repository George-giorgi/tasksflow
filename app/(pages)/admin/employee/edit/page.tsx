import Form from "@/app/ui/components/Form";
import Search from "@/app/ui/components/Search";
import { searchEmployees, getEmployeeById } from "@/app/utils/actions";

const Page = async (props: {
  searchParams?: Promise<{
    id?: string;
    query?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query;
  const id = searchParams?.id;

  const result = await searchEmployees(query);
  const employee = await getEmployeeById(id);

  return (
    <div className=" flex justify-center items-center flex-col">
      <div className=" flex items-center justify-center">
        <Search
          searchresult={result}
          deletee={true}
          title={"Search Employee"}
        />
      </div>

      <div className=" flex items-center justify-center !mt-15">
        <Form
          id={id}
          title={"Edit"}
          name={employee?.name}
          surname={employee?.surname}
          email={employee?.email}
          mobile={employee?.mobile}
        />
      </div>
    </div>
  );
};

export default Page;
