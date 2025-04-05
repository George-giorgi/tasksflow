import { findTaskById } from "@/app/utils/actions";
import Task from "../../Admin/tasks/Task";

const ChoosedTask = async ({ TaskId }: { TaskId: string }) => {
  const { task, message } = await findTaskById(TaskId);

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className=" flex flex-col items-center justify-center font-semibold text-sm">
        <p>It's Your Task {"employeename"}</p>
        <p>This task is assigned for: {task?.taskFor}</p>
      </div>
      <div className=" !mt-3">
        <Task
          id={task?.id || ""}
          partNumber={task?.partNumber || ""}
          description={task?.description || ""}
          metalType={task?.metalType || ""}
          drawing={task?.drawing || ""}
          qty={task?.qty || ""}
          taskFor={task?.taskFor || ""}
          {...task}
        />
      </div>
      {!task && message}
    </div>
  );
};

export default ChoosedTask;
