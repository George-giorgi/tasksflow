import { ButtonConfig } from "./definitions/buttons/definition";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LogoutIcon from "@mui/icons-material/Logout";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

const employeeLinks = [
  {
    href: "/admin/employee/add",
    title: "Add",
  },
  {
    href: "/admin/employee/edit",
    title: "Edit",
  },
];

const buttonConfigs: ButtonConfig[] = [
  {
    keytitle: "ClockIn",
    className:
      "flex items-center justify-center gap-1.5 bg-[var(--success-color)] text-[var(--mainBg-color)] hover:text-white cursor-pointer rounded-lg py-3 px-1",
    icon: AccessTimeIcon,
    link: "#",
  },
  {
    keytitle: "ClockOut",
    className:
      "flex items-center justify-center gap-1.5 bg-[var(--hover-color)] text-[var(--mainBg-color)] hover:text-white cursor-pointer rounded-lg py-3 px-1",
    icon: LogoutIcon,
    link: "#",
  },
  {
    keytitle: "Switch",
    className:
      "flex items-center justify-center gap-1.5 bg-[#FFCC00] text-[var(--mainBg-color)] hover:text-white cursor-pointer rounded-lg py-3 px-1",
    icon: SwapHorizIcon,
    link: "/employee",
  },
];

export { employeeLinks, buttonConfigs };
