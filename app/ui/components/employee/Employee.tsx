import { OneEmployee } from "@/app/utils/definitions";

const Employee = (props: { employee: OneEmployee }) => {
  return (
    <div>
      <div className=" flex gap-3">
        <p>{props.employee.name}</p>
        <p>{props.employee.surname}</p>
      </div>
    </div>
  );
};

export default Employee;
