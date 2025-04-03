"use client";

import { useRouter, usePathname } from "next/navigation";

import { OneEmployee as OneEmployeeType } from "@/app/utils/definitions/employee/definitions";

const OneEmployee = ({ id, name, surname, email, mobile }: OneEmployeeType) => {
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = (e: any, employeeId: string) => {
    if (!employeeId) return;

    const params = new URLSearchParams();

    params.set("id", employeeId);

    // replace the current URL with ?id=...
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      {id && (
        <div
          onClick={(e) => handleClick(e, id)}
          className="flex items-center justify-center cursor-pointer hover:bg-[#333333] transition-all rounded-xl w-max text-sm p-2 gap-2"
        >
          <p className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white font-bold ">
            {name.slice(0, 1).toUpperCase()}
            {surname.slice(0, 1).toUpperCase()}
          </p>
          <p>{name}</p>
          <p>{surname}</p>
          <p>{email}</p>
          {/* <p>{mobile}</p> */}
        </div>
      )}
    </div>
  );
};

export default OneEmployee;
