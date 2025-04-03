import FormAdminAddTask from "@/app/ui/components/Forms/FormAdminAddTask";

import BackHomePage from "@/app/ui/components/Links/BackHomePage";

const Page = async (props: {
  searchParams?: Promise<{
    task_query?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;

  // gramb querys
  const query = searchParams?.task_query;

  return (
    <div className=" flex flex-col items-center justify-center md:!mt-[var(--mainMargin-top)] !mt-[var(--mainMarginResp-top)] md:!mb-[var(--mainMargin-bottom)] ">
      <div className=" flex-1">
        <BackHomePage
          WhatDoYouCan={"You can add a tasks."}
          AdminName={"Adminname"}
        />
      </div>
      <div className=" flex-1">
        <FormAdminAddTask />
      </div>
    </div>
  );
};

export default Page;
