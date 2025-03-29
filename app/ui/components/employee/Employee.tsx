import { OneEmployee } from "@/app/utils/definitions";
import Link from "next/link";

const Employee = (props: { employee: OneEmployee }) => {
  return (
    <div>
      <Link href={`/employee/${props.employee.id}/portal`}>
        <div className=" flex gap-3 !mb-4">
          <p>{props.employee.name}</p>
          <p>{props.employee.surname}</p>
        </div>
      </Link>
    </div>
  );
};

export default Employee;
