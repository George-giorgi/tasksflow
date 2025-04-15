"use client";

import AssignmentIcon from "@mui/icons-material/Assignment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Link from "next/link";
import { Task } from "@/app/utils/definitions/task/definitions";
import { useTaskStore } from "@/app/utils/store/taskStore";

const ChooseButton = ({ ...props }: Task) => {
  const store = useTaskStore();
  const handleCklick = (e: any) => {
    e.stopPropagation();
    store.setTask({ ...props });
  };

  const {
    id,
    partNumber,
    description,
    metalType,
    drawing,
    qty,
    taskFor,
    keytitle,
  } = { ...props };

  return (
    <div>
      <Link href={`/employee/${id}/portal`}>
        <div
          className="  flex hover:text-[var(--success-color)]"
          onClick={(e) => handleCklick(e)}
        >
          <AssignmentIcon fontSize="small" />
          <AccessTimeIcon fontSize="small" />
        </div>
      </Link>
    </div>
  );
};

export default ChooseButton;
