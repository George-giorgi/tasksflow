import Search from "@/app/ui/components/Search/Search";
import BackHomePage from "@/app/ui/components/Links/BackHomePage";
import EmployeeList from "@/app/ui/components/Admin/employee/EmployeeList";
import FormEditDelete from "@/app/ui/components/Forms/FormEditDelete";

const Page = async (props: {
  searchParams?: Promise<{
    querystring?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const querystring = searchParams?.querystring || "";

  return (
    <div className=" flex flex-col  ">
      <div className=" md:!mt-[var(--mainMargin-top)] !mt-[var(--mainMarginResp-top)]  ">
        <BackHomePage
          WhatDoYouCan={"You can edit or delete employee information."}
          AdminName={"Adminname"}
        />
        <div className="!mt-3">
          <Search title={"Search Employee"} />
        </div>
      </div>
      <div className=" flex md:flex-row flex-col !mt-10">
        <div className=" flex-1 ">
          <EmployeeList querystring={querystring} />
        </div>

        <div className="  flex-1 ">
          <FormEditDelete />
        </div>
      </div>
    </div>
  );
};

export default Page;
