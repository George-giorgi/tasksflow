"use client";

import { usePathname } from "next/navigation";
import { NavProps } from "@/app/utils/definitions";
import Link from "next/link";

const Nav = ({ links }: NavProps) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className=" flex gap-3 items-center justify-center">
      {links.map((lnk) => {
        return (
          <Link key={lnk.title} href={lnk.href}>
            <p className={`${lnk.href == pathname && " text-red-500"}`}>
              {lnk.title}
            </p>
          </Link>
        );
      })}
      <Link href={"/admin"}>go to admin page</Link>
    </div>
  );
};

export default Nav;
