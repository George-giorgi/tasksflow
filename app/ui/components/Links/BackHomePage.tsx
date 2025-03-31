import Link from "next/link";

import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackHomePage = ({
  WhatDoYouCan,
  AdminName,
}: {
  WhatDoYouCan: string;
  AdminName: string;
}) => {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <Link href={"/"}>
        <p className=" group flex items-center gap-1 cursor-pointer !mb-5 text-[var(--header-color)] hover:text-[var(--hover-color)] transition-all">
          <ArrowBackIcon
            className="group-hover:-translate-x-1 transition-all"
            fontSize="small"
          />
          <span className=" font-semibold">Back to Home</span>
          <HomeIcon fontSize="small" />
        </p>
      </Link>
      <p className="  font-semibold">Hello {AdminName}</p>
      <h1 className=" text-sm">{WhatDoYouCan}</h1>
    </div>
  );
};

export default BackHomePage;
