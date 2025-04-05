import Task from "./Task";
import { searchTasks } from "@/app/utils/actions";
const TaskList = async ({
  querystring,
  keytitle,
}: {
  querystring?: string;
  keytitle: string;
}) => {
  const { success, tasks, message } = await searchTasks(querystring);

  if (!success || tasks?.length === 0) {
    return (
      <div className=" h-12 flex items-center justify-center ">
        <p className={`text-sm `}>{message}.</p>
      </div>
    );
  }
  return (
    <div className=" flex justify-center ">
      <div className=" !mt-12 px-5 w-[100%] md:w-[75%]  flex flex-col gap-3 max-h-60 overflow-scroll ">
        {tasks?.map((empl) => (
          <Task key={empl.id} {...empl} keytitle={keytitle} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
