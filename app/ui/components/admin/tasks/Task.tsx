"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Task } from "@/app/utils/definitions/task/definitions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";

const Task = ({
  id,
  partNumber,
  description,
  metalType,
  drawing,
  qty,
  taskFor,
}: Task) => {
  const [open, setOpen] = useState(false);
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
    <div
      className="  flex flex-col bg-[var(--smaltext-color)] opacity-85 hover:opacity-100 pb-2 pt-1 px-2  rounded-lg cursor-pointer "
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className=" flex items-center justify-between  text-sm py-1   text-[var(--mainText-color)] rounded-lg border-b-2 border-dashed border-gray-300 ">
        <div className="">
          <span className=" text-gray-700 text-sm font-semibold">
            Part Num:
          </span>
          &nbsp;
          <span>{partNumber}</span>
        </div>
        <div className="flex gap-2">
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
      </div>

      <div
        className={`${
          open ? "h-auto" : "hidden"
        } transition-all overflow-hidden text-sm  !mt-3`}
      >
        <div>
          <span className="text-gray-700 font-semibold">Task For: </span> &nbsp;
          <span>{taskFor}</span>
        </div>
        <div>
          <span className="text-gray-700 font-semibold">Qty:</span>&nbsp;
          <span>{qty}</span>
        </div>
        <div>
          <span className="text-gray-700 font-semibold">Metal Type: </span>{" "}
          &nbsp;
          <span>{metalType}</span>
        </div>
        <div>
          <span className="text-gray-700 font-semibold">Drawing: </span> &nbsp;
          <span>{drawing}</span>
        </div>
        <div className="">
          <span className="text-gray-700 font-semibold ">Description:</span>
          &nbsp;
          <span className=" pl-5 block max-w-xs break-words">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Task;
{
  /* <div
// onClick={(e) => handleClick(e, id)}
className="flex items-center justify-center cursor-pointer hover:bg-[#333333] transition-all rounded-xl w-max text-sm p-2 gap-2 "
>
<p>{partNumber}</p>
<p>{description}</p>
<p>{qty}</p>
<p>{taskFor}</p>
<p>{metalType}</p>
{/* <p>{drawing}</p> */
}
// </div> */}
