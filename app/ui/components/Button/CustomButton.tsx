import { ReactNode } from "react";
import clsx from "clsx";
import { capitalize } from "@/app/utils/capitalize";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  key_title: string;
  isPending?: boolean;
  taskQty?: number;
  icon?: ReactNode;
}

const Button: React.FC<CustomButtonProps> = ({
  type = "button",
  className = "",
  key_title,
  isPending,
  icon,
  taskQty,
  ...props
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "flex items-center justify-center w-30 rounded-lg py-1 px-4 cursor-pointer !mt-4 transition",
        className
      )}
      {...props}
      disabled={isPending}
    >
      {isPending ? (
        <p className="font-semibold text-sm">Loading...</p>
      ) : (
        <span className="flex items-center gap-2 font-semibold text-sm">
          {capitalize(key_title)}
          {icon && <span>{icon}</span>}
          <p className=" text-[var(--success-color)]">{taskQty}</p>
        </span>
      )}
    </button>
  );
};

export default Button;
