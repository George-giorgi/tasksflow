import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>Hello Admin</p>
      <Link href={"admin/employee"}>
        <p className=" underline">add delete update employee info</p>
      </Link>
      <Link href={"admin/tasks"}>
        <p className=" underline">add delete update tasks for employee</p>
      </Link>
    </div>
  );
}
