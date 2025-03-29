import { getEmployeeById, searchTasks } from "@/app/utils/actions";
import Search from "@/app/ui/components/Share/Search";

// Define the shape of your props as Promises.
type EmployeePortalProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ id?: string; task_query?: string }>;
};

const EmployeePortal = async ({
  params,
  searchParams,
}: EmployeePortalProps) => {
  // Await the params before accessing its properties.
  const resolvedParams = await params;
  const emplId = resolvedParams.id;

  // Await searchParams if provided.
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const forSearchTasks = resolvedSearchParams.task_query;

  const employee = await getEmployeeById(emplId);
  const searchedTasks = await searchTasks(forSearchTasks);

  return (
    <div>
      <p>Portal Employee</p>
      <p>Hello {employee?.name}</p>
      <p>Please choose task</p>
      <Search
        title="Search Task"
        searchTasks={searchedTasks}
        portal={true}
        employeeId={employee?.id}
      />
    </div>
  );
};

export default EmployeePortal;
