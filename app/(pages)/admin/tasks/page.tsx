import AdminTaskForm from "@/app/ui/components/AdminTaskForm";
import Search from "@/app/ui/components/Search";
const Page = () => {
  return (
    <div>
      <h1 className=" text-center text-xl !mt-10 !mb-10">Add Tasks</h1>
      <Search title={"Search Task"} />
      <AdminTaskForm />
    </div>
  );
};

export default Page;
