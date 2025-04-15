"use client";
import { useUserStore } from "@/app/utils/store/useUserStore";
import { useClockStore } from "@/app/utils/store/cklock";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const RouteGuard = ({ children }: Props) => {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  // useUserStore().resetUser();
  // useClockStore().resetClockStates();

  console.log("i am here");

  useEffect(() => {
    if (!user) {
      router.push("/reg_log"); // 👈 adjust based on your login route
    } else {
      router.push("/"); // 👈 optional admin fallback
    }
  }, [user, router]);

  if (!user) return null; // ⛔ don't show content while redirecting

  return <>{children}</>;
};

export default RouteGuard;
