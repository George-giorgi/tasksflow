"use client";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Link from "next/link";

const ChooseButton = ({ id }: { id: string }) => {
  const handleCklick = (e: any) => {
    e.stopPropagation();
    console.log("choosed task id " + id);
  };

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
