import BackHomePage from "@/app/ui/components/Links/BackHomePage";
import Search from "@/app/ui/components/Search/Search";
import TaskList from "@/app/ui/components/Admin/tasks/TaskList";

const Page = async (props: {
  searchParams?: Promise<{
    querystring?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const querystring = searchParams?.querystring || "";
  return (
    <div className=" flex flex-col items-center  justify-center  ">
      <div className=" flex-1 md:!mt-[var(--mainMargin-top)] !mt-[var(--mainMarginResp-top)]  ">
        <BackHomePage
          WhatDoYouCan={"Choose Your Task."}
          AdminName={"employeeName"}
          homeLink={"/"}
        />
      </div>
      <div className="!mt-3">
        <Search title={"Search Tasks"} />
      </div>
      <div className=" w-[50%] ">
        <TaskList querystring={querystring} keytitle={"EmployeerTask"} />
      </div>
    </div>
  );
};

export default Page;
