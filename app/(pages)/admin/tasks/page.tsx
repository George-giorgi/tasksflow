import AdminTaskForm from "@/app/ui/components/AdminTaskForm";
import Search from "@/app/ui/components/Search";
import { searchTasks } from "@/app/utils/actions";
const Page = async (props: {
  searchParams?: Promise<{
    id?: string;
    task_query?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.task_query;
  const tasksresult = await searchTasks(query);
  // console.log(tasksresult);

  return (
    <div>
      <h1 className=" text-center text-xl !mt-10 !mb-10">Add Tasks</h1>
      <div className=" !mb-36 ">
        <Search title={"Search Task"} searchTasks={tasksresult} />
      </div>

      <AdminTaskForm />
    </div>
  );
};

export default Page;
