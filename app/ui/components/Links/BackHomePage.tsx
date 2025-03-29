import Link from "next/link";

import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackHomePage = () => {
  return (
    <Link href={"/"}>
      <p className=" flex items-center gap-1 cursor-pointer !mb-5 hover:text-[var(--hover-color)]">
        <ArrowBackIcon fontSize="small" /> Back to Home{" "}
        <HomeIcon fontSize="small" />
      </p>
    </Link>
  );
};

export default BackHomePage;
