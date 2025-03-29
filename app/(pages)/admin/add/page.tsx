import Form from "@/app/ui/components/Share/Form";
import BackHomePage from "@/app/ui/components/Links/BackHomePage";

const Page = () => {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className=" flex flex-col items-center justify-center md:!mt-40 !mt-20 ">
        <BackHomePage />
        <p className="  font-semibold">Hello {"Admin Name."}</p>
        <h1 className=" text-sm">You can add an employee.</h1>
      </div>

      <Form title={"Add"} />
    </div>
  );
};

export default Page;
