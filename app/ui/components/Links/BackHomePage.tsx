import { ReactNode } from "react";
import Link from "next/link";

import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackHomePage = ({
  WhatDoYouCan,
  AdminName,
  employeeName,
  homeLink = "/",
  updateDeleteLink,
  createdLink,
  employeeLink,
  keyTitle,
  icon,
}: {
  WhatDoYouCan: string;
  AdminName?: string;
  employeeName?: string;
  homeLink?: string;
  updateDeleteLink?: string;
  createdLink?: string;
  employeeLink?: string;
  keyTitle?: string;
  icon?: ReactNode;
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <Link href={homeLink}>
        <p className=" group flex items-center justify-center gap-1 cursor-pointer !mb-2 text-[var(--header-color)] hover:text-[var(--hover-color)] transition-all">
          <ArrowBackIcon
            className="group-hover:-translate-x-1 transition-all"
            fontSize="small"
          />
          <span className=" font-semibold">Back to Home.</span>
          <HomeIcon fontSize="small" />
        </p>
      </Link>
      {(updateDeleteLink || createdLink || employeeLink) && (
        <Link href={updateDeleteLink || createdLink || employeeLink || "#"}>
          <p className=" group flex items-center justify-center gap-1 cursor-pointer !mb-5 text-[var(--header-color)] hover:text-[var(--hover-color)] transition-all">
            <ArrowBackIcon
              className="group-hover:-translate-x-1 transition-all"
              fontSize="small"
            />
            <span className=" font-semibold"> {keyTitle}</span>
            {icon}
          </p>
        </Link>
      )}

      <p className="  font-semibold ">Hello {AdminName || employeeName}.</p>
      <h1 className=" text-sm text-center">{WhatDoYouCan}</h1>
    </div>
  );
};

export default BackHomePage;
