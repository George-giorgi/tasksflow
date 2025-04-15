"use client";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";
import { useUserStore } from "@/app/utils/store/useUserStore";
import { capitalize } from "@mui/material";
const ForAdmin = () => {
  const { user } = useUserStore();
  return (
    <div className=" flex-1 pl-10 pr-10 md:pl-44">
      <h2 className="  font-semibold text-[var(--header-color)] !mb-5">
        For Admins &nbsp;
        <span className="text-[var(--error-color)]">
          {!user?.admin && `${capitalize(user?.name)} You are not Admin`}
        </span>
      </h2>
      <div>
        <div className=" !mb-3">
          <p className=" cursor-pointer w-max !mb-1 font-semibold   ">
            Employee Management
          </p>
          <p className="text-sm pl-2 text-[var(--smaltext-color)]">
            Easily{" "}
            <Link href={user?.admin ? `/admin/add_employee` : "#"}>
              <span className="hover:text-[var(--hover-color)] cursor-pointer font-bold text-[16px]">
                add
                <LinkIcon fontSize="small" />
              </span>
            </Link>
            , {/* Edit Delete */}
            <Link href={user?.admin ? "/admin/edit_delete_employee" : "#"}>
              <span className="hover:text-[var(--hover-color)] cursor-pointer font-bold text-[16px]">
                edit
                <LinkIcon fontSize="small" />
              </span>
            </Link>
            , and{" "}
            <Link href={user?.admin ? "/admin/edit_delete_employee" : "#"}>
              <span className="hover:text-[var(--hover-color)] cursor-pointer font-bold text-[16px]">
                delete
                <LinkIcon fontSize="small" />
              </span>
            </Link>
            , employee records. Keep your team information current with just a
            few clicks.
          </p>
        </div>

        <div className="">
          <p className=" cursor-pointer w-max !mb-1 font-semibold  ">
            Task Management
          </p>
          <p className=" text-sm pl-2 text-[var(--smaltext-color)]">
            Admins have full control over tasks —{" "}
            <Link href={user?.admin ? "/admin/add_tasks" : "#"}>
              <span className="hover:text-[var(--hover-color)] cursor-pointer font-bold text-[16px]">
                add
                <LinkIcon fontSize="small" />
              </span>
            </Link>
            ,{" "}
            <Link href={user?.admin ? "/admin/edit_delete_tasks" : "#"}>
              <span className="hover:text-[var(--hover-color)] cursor-pointer font-bold text-[16px]">
                edit
                <LinkIcon fontSize="small" />
              </span>
            </Link>{" "}
            or{" "}
            <Link href={user?.admin ? "/admin/edit_delete_tasks" : "#"}>
              <span className="hover:text-[var(--hover-color)] cursor-pointer font-bold text-[16px]">
                delete
                <LinkIcon fontSize="small" />
              </span>
            </Link>{" "}
            them as needed to maintain a streamlined project pipeline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForAdmin;
