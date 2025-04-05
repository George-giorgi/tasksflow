import ButtonWrapper from "@/app/ui/components/Button/CustomButtonProcess";
import ChoosedTask from "@/app/ui/components/EmployeePortal/Task/ChoosedTask";
import BackHomePage from "@/app/ui/components/Links/BackHomePage";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 ">
      <div className="flex-1 flex items-end">
        <BackHomePage
          keyTitle={"Search your next Task."}
          WhatDoYouCan={"CklockIn, Clock Out and Switch your task."}
          employeeName={"registeredEmployyname"}
          // employeeLink={"/employee"}
          icon={<AssignmentIcon fontSize="small" />}
        />
      </div>
      <div className="flex items-end">
        <ChoosedTask TaskId={id} />
      </div>
      <div className="flex-1 ">
        <ButtonWrapper taskid={id} />
      </div>
    </div>
  );
};

export default Page;
