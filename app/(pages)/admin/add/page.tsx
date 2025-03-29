import FormAdd from "@/app/ui/components/Forms/FormAdd";
import BackHomePage from "@/app/ui/components/Links/BackHomePage";

const Page = () => {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div>
        <BackHomePage
          WhatDoYouCan={"You can add an employee."}
          AdminName={"Adminname"}
        />
      </div>
      <div>
        <FormAdd />
      </div>
    </div>
  );
};

export default Page;
