import {
  countEmployees,
  countTasks,
  getSortedTasks,
} from "@/app/utils/actions/info_actions";
import PersonIcon from "@mui/icons-material/Person";

const Info = async () => {
  const employeeSum = await countEmployees();
  const taskSum = await countTasks();
  const taskStatus = await getSortedTasks();

  const groupedTasks = {
    initi: taskStatus.filter((task) => task.status === "init"),
    progress: taskStatus.filter((task) => task.status === "progress"),
    done: taskStatus.filter((task) => task.status === "done"),
  };

  return (
    <div className="flex items-center justify-center gap-5 sticky top-0 h-12 font-semibold text-sm bg-[#2A4365]">
      <div className="flex items-center justify-center">
        <PersonIcon fontSize="small" />
        <p className="ml-2">Employee: {employeeSum}</p>
      </div>

      <div className="flex items-center justify-center gap-1">
        <p className="w-3 h-3 rounded-full bg-[var(--success-color)]"></p>
        <p>Active Tasks temp all tasks: {taskSum}</p>
      </div>

      <div className="flex items-center justify-center gap-1">
        <p className="w-3 h-3 rounded-full bg-[var(--smaltext-color)]"></p>
        <p>Finalized Tasks: {"?"}</p>
      </div>
      <div className=" flex gap-3">
        <p>init: {groupedTasks.initi.length}</p>{" "}
        <p>progress: {groupedTasks.progress.length}</p>{" "}
        <p>done: {groupedTasks.done.length}</p>
      </div>
    </div>
  );
};

export default Info;
