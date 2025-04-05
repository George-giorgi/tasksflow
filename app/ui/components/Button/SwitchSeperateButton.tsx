"use client";

import { useClockStore } from "@/app/utils/store/cklock";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { useRouter } from "next/navigation";
import { clockActions } from "@/app/utils/definitions/clock/definition";

const SwitchSeperateButton = ({
  id,
  keytitle,
}: {
  id: string;
  keytitle: string;
}) => {
  const router = useRouter();
  const store = useClockStore();
  console.log(store);

  const handleSwitchCklick = (e: any) => {
    e.stopPropagation();
    console.log("ready for switch");
    // update with cklick in state after cklick sitch
    const updates = clockActions["ClockIn"];
    if (updates) {
      store.setClockStates(updates);
    }
    // router.push(`/employee${}/portal`)
    router.push(`/employee/${id}/portal`);
  };

  if (!store.sw) {
    return <div></div>;
  }
  return (
    <div className=" w-max " onClick={(e) => handleSwitchCklick(e)}>
      <button
        type={"button"}
        className={
          "flex items-center justify-center gap-1.5 bg-[#FFCC00] text-[var(--mainBg-color)] hover:text-white   rounded-lg py-2 px-3 cursor-pointer"
        }
      >
        <p>{keytitle}</p>
        <SwapHorizIcon fontSize="small" />
      </button>
    </div>
  );
};

export default SwitchSeperateButton;
