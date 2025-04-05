import RegLogWrapper from "@/app/ui/components/RegLog/RegLogWrapper";
import Search from "@/app/ui/components/Search/Search";
import EmployeeList from "@/app/ui/components/Admin/employee/EmployeeList";
import BackHomePage from "@/app/ui/components/Links/BackHomePage";

const Page = async (props: {
  searchParams?: Promise<{
    querystring?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const querystring = searchParams?.querystring || "";
  return (
    <div className=" flex flex-col min-h-screen ">
      <div className=" flex-1 flex flex-col items-center justify-center">
        <BackHomePage WhatDoYouCan="Find Yourself For Reg/Log" />
        <Search title={"Find Yourself."} />
        <EmployeeList querystring={querystring} />
      </div>
      <div className=" flex-1 flex md:flex-row flex-col items-center md:items-start md:justify-center justify-start">
        <RegLogWrapper />
      </div>
    </div>
  );
};

export default Page;
