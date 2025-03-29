import Link from "next/link";

import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackHomePage = () => {
  return (
    <Link href={"/"}>
      <p className=" group flex items-center gap-1 cursor-pointer !mb-5 hover:text-[var(--hover-color)] transition-all">
        <ArrowBackIcon
          className="group-hover:-translate-x-1 transition-all"
          fontSize="small"
        />
        <span className=" font-semibold">Back to Home</span>
        <HomeIcon fontSize="small" />
      </p>
    </Link>
  );
};

export default BackHomePage;
