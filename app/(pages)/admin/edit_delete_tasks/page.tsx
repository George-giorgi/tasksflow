import BackHomePage from "@/app/ui/components/Links/BackHomePage";
import Search from "@/app/ui/components/Search/Search";
import TaskList from "@/app/ui/components/Admin/tasks/TaskList";
import FormAdminEditDeleteTask from "@/app/ui/components/Forms/FormAdminEditDeleteTask";

const Page = async (props: {
  searchParams?: Promise<{
    querystring?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const querystring = searchParams?.querystring || "";

  return (
    <div className=" flex flex-col  justify-center ">
      <div className=" flex-1 md:!mt-[var(--mainMargin-top)] !mt-[var(--mainMarginResp-top)]  ">
        <BackHomePage
          WhatDoYouCan={"You can edit or delete task information."}
          AdminName={"Adminname"}
        />
        <div className="!mt-3">
          <Search title={"Search Tasks"} />
        </div>
      </div>
      <div className=" flex-1 flex md:flex-row flex-col !mt-10">
        <div className=" flex-1  ">
          <TaskList querystring={querystring} />
        </div>

        <div className="  flex-1 ">
          <FormAdminEditDeleteTask />
        </div>
      </div>
    </div>
  );
};

export default Page;
