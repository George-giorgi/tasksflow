import Form from "@/app/ui/components/Share/Form";
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
    <div>
      <p className=" md:!mt-40 !mt-20  ">
        <BackHomePage
          WhatDoYouCan={"You can edit or delete employee information."}
          AdminName={"Adminname"}
        />

        <Search title={"Search Employee"} />
      </p>
      <div className=" flex md:flex-row flex-col">
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
