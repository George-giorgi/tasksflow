import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";

const ForEmployee = () => {
  return (
    <div className=" flex-1 pl-10 pr-10 md:pr-44">
      <h2 className="  font-semibold text-[var(--header-color)] !mb-5">
        For Employees
      </h2>
      <div>
        <div className=" !mb-3">
          <Link href={"/employee"}>
            <p className=" cursor-pointer w-max !mb-1 font-semibold hover:text-[var(--hover-color)] ">
              Task Portal &nbsp;
              <LinkIcon fontSize="small" />
            </p>
          </Link>

          <p className="text-sm pl-2 text-[var(--smaltext-color)]">
            Find and view tasks in a dedicated section, ensuring you always know
            what needs to be done.
          </p>
        </div>
        <div className=" !mb-3">
          <Link href={"/employee"}>
            <p className=" cursor-pointer w-max !mb-1 font-semibold hover:text-[var(--hover-color)] ">
              Clock In & Clock Out &nbsp;
              <LinkIcon fontSize="small" />
            </p>
          </Link>

          <p className="text-sm pl-2 text-[var(--smaltext-color)]">
            Accurately track your work hours by clocking in when you start and
            clocking out when you finish.
          </p>
        </div>
        <div className=" ">
          <Link href={"/employee"}>
            <p className=" cursor-pointer w-max !mb-1 font-semibold hover:text-[var(--hover-color)] ">
              Task Switching &nbsp;
              <LinkIcon fontSize="small" />
            </p>
          </Link>

          <p className="text-sm pl-2 text-[var(--smaltext-color)]">
            Seamlessly switch between tasks throughout the day, making it easy
            to manage multiple projects at once.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForEmployee;
