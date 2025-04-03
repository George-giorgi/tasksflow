import FormAdd from "@/app/ui/components/Forms/FormAddEmployee";
import BackHomePage from "@/app/ui/components/Links/BackHomePage";
import PersonIcon from "@mui/icons-material/Person";

const Page = () => {
  return (
    <div className=" flex flex-col items-center justify-center md:!mt-[var(--mainMargin-top)] !mt-[var(--mainMarginResp-top)] ">
      <div className="flex-1">
        <BackHomePage
          WhatDoYouCan={"You can add an employee."}
          AdminName={"Adminname"}
          homeLink={"/"}
          updateDeleteLink={"/admin/edit_delete_employee"}
          keyTitle={"Update or Delete Employee"}
          icon={<PersonIcon fontSize="small" />}
        />
      </div>

      <div className=" flex-1">
        <FormAdd />
      </div>
    </div>
  );
};

export default Page;
