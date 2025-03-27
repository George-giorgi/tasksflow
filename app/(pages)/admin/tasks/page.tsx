import AdminTaskForm from "@/app/ui/components/AdminTaskForm";
import Search from "@/app/ui/components/Search";
import EditFormForTask from "@/app/ui/components/EditFormForTask";
import { searchTasks, findTaskById } from "@/app/utils/actions";
const Page = async (props: {
  searchParams?: Promise<{
    id?: string;
    task_query?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;

  // gramb querys
  const query = searchParams?.task_query;
  const taskId = searchParams?.id;
  // call actions for search all mached and edit single task
  const tasksresult = await searchTasks(query);
  const findedTaskForEdit = await findTaskById(taskId);
  console.log(taskId);

  return (
    <div>
      <h1 className=" text-center text-xl !mt-10 !mb-10">Add Tasks</h1>
      <div className=" !mb-36 ">
        <Search title={"Search Task"} searchTasks={tasksresult} />
      </div>
      {/* if we try tu find task for edit will render edit form component */}
      {findedTaskForEdit && (
        <EditFormForTask
          id={findedTaskForEdit.id}
          partNumber={findedTaskForEdit?.partNumber}
          description={findedTaskForEdit?.description}
          descriptionFromEmployee={findedTaskForEdit?.descriptionFromEmployee}
          metalType={findedTaskForEdit?.metalType}
          drawing={findedTaskForEdit?.drawing}
          qty={findedTaskForEdit?.qty}
        />
      )}

      <AdminTaskForm />
    </div>
  );
};

export default Page;
