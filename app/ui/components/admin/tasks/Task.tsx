"use client";

import { useState, useEffect } from "react";

import { Task } from "@/app/utils/definitions/task/definitions";

import DeleteUpdateExpland from "./DeleteUpdateExpland";
import ChooseButton from "../../Button/ChooseButton";
import SwitchSeperateButton from "../../Button/SwitchSeperateButton";
import { useClockStore } from "@/app/utils/store/cklock";

const Task = ({
  id,
  partNumber,
  description,
  metalType,
  drawing,
  qty,
  taskFor,
  keytitle,
}: Task) => {
  const [open, setOpen] = useState(false);
  const store = useClockStore();

  return (
    <div
      className="  flex flex-col bg-[var(--smaltext-color)] opacity-85 hover:opacity-100 pb-2 pt-1 px-2  rounded-lg cursor-pointer "
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className=" flex items-center justify-between  text-sm py-1   text-[var(--mainText-color)] rounded-lg border-b-2 border-dashed border-gray-300 ">
        <div className="flex items-center justify-center ">
          <p className=" hidden md:block text-gray-700 text-sm font-semibold">
            Part Num:
          </p>
          &nbsp;
          <p>{partNumber}</p>
        </div>
        <div>
          {store.out == false && store.sw == true && (
            <SwitchSeperateButton keytitle={"Switch"} id={id} />
          )}
          {keytitle == "AminTask" && (
            <DeleteUpdateExpland open={open} id={id} />
          )}
          {keytitle == "EmployeerTask" && !store.sw && (
            <ChooseButton
              id={id}
              partNumber={partNumber}
              description={description}
              metalType={metalType}
              drawing={drawing}
              qty={qty}
              taskFor={taskFor}
              keytitle={keytitle}
              status=""
            />
          )}
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
