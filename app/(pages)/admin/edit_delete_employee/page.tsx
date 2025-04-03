import Search from "@/app/ui/components/Search/Search";
import BackHomePage from "@/app/ui/components/Links/BackHomePage";
import EmployeeList from "@/app/ui/components/Admin/employee/EmployeeList";
import FormEditDelete from "@/app/ui/components/Forms/FormEditDeleteEmployee";
import PersonIcon from "@mui/icons-material/Person";

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
          WhatDoYouCan={"You can update or delete employee information."}
          AdminName={"Adminname"}
          homeLink={"/"}
          createdLink={"/admin/add_employee"}
          keyTitle={"Add Employee"}
          icon={<PersonIcon fontSize="small" />}
        />
        <div className="!mt-3">
          <Search title={"Search Employee"} />
        </div>
      </div>
      <div className=" flex-1 flex md:flex-row flex-col !mt-10">
        <div className=" flex-1  ">
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
