import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter, usePathname } from "next/navigation";

const DeleteUpdateExpland = ({ open, id }: { open: boolean; id: string }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleCklick = (e: any) => {
    e.stopPropagation();
    if (!id) return;

    const params = new URLSearchParams();
    params.set("id", id);

    // replace the current URL with ?id=...
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className=" flex items-center  gap-2">
      <div
        className=" hover:text-gray-700"
        // onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <p className=" ">
            <ExpandLessIcon fontSize="small" />
          </p>
        ) : (
          <p className="">
            <ExpandMoreIcon fontSize="small" />
          </p>
        )}
      </div>
      {/* here */}
      <div className=" flex gap-1">
        <p
          className="hover:text-[#FFCC00]"
          onClick={(e) => {
            handleCklick(e);
          }}
        >
          <UpdateIcon fontSize="small" />
        </p>
        <p
          className=" hover:text-[var(--hover-color)]"
          onClick={(e) => {
            handleCklick(e);
          }}
        >
          <DeleteIcon fontSize="small" />
        </p>
      </div>
    </div>
  );
};

export default DeleteUpdateExpland;
