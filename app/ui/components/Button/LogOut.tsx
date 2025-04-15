"use client";

import { useRouter } from "next/navigation";
import { useUserStore } from "@/app/utils/store/useUserStore";
import { useTaskStore } from "@/app/utils/store/taskStore";
import { useClockStore } from "@/app/utils/store/cklock";

const LogOut = () => {
  const { resetUser, user } = useUserStore();
  const { task, clearTask } = useTaskStore();
  const { resetClockStates } = useClockStore();
  const router = useRouter();
  const handleLogOutClick = () => {
    if (user) {
      resetUser();
      resetClockStates();
      clearTask();
      router.push("/reg_log");
    }
  };

  if (!user) return;
  return (
    <div onClick={handleLogOutClick}>
      <button className=" absolute right-5 bg-[var(--hover-color)] rounded-lg cursor-pointer py-2 px-3">
        Logout
      </button>
    </div>
  );
};

export default LogOut;
