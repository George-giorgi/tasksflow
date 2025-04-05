"use client";

import { useRouter } from "next/navigation";
import { buttonConfigs } from "@/app/utils/constants";
import { useClockStore } from "@/app/utils/store/cklock";
import { clockActions } from "@/app/utils/definitions/clock/definition";

// Define types for the button props, expecting an icon as a React component.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<any>; // Expect the icon as a React component.
  keytitle: string;
  link: string;
}

const ButtonWrapper = ({ taskid }: { taskid: string }) => {
  // Fetch the clock state from the store
  const store = useClockStore();
  console.log(store);
  const { push } = useRouter();

  const handleclick = (keytitle: string) => {
    console.log("from wrapper " + taskid + keytitle);
    const updates = clockActions[keytitle];
    if (updates) {
      store.setClockStates(updates);
      if (keytitle === "Switch") {
        push("/employee");
      }
      if (keytitle === "ClockOut") {
        push("/employee");
        store.resetClockStates();
      }
    }
  };

  // Function to conditionally render buttons based on the clock state
  const renderButtonConditionally = (btnKey: string) => {
    if (btnKey === "ClockIn" && store.in) {
      return true; // Show "ClockIn" button if "in" is true
    }
    if (btnKey === "ClockOut" && store.out) {
      return true; // Show "ClockOut" button if "out" is true
    }
    if (btnKey === "Switch" && store.sw) {
      return true; // Show "Switch" button if "sw" is true
    }
    return false; // Hide button otherwise
  };

  return (
    <div className="flex items-center justify-center gap-3 text-sm md:text-base font-semibold">
      {buttonConfigs.map((btn) => {
        return (
          renderButtonConditionally(btn.keytitle) && (
            <ButtonInOutSwitch
              key={btn.keytitle}
              keytitle={btn.keytitle}
              icon={btn.icon}
              className={btn.className}
              onClick={() => handleclick(btn.keytitle)}
              link={btn.link}
            />
          )
        );
      })}
    </div>
  );
};

const ButtonInOutSwitch: React.FC<ButtonProps> = ({
  className = "",
  type = "button",
  icon: Icon, // Destructure the icon and rename it to Icon (to be rendered)
  keytitle,
  link,
  ...props
}) => {
  return (
    <div>
      <button type={type} className={className} {...props}>
        <p>{keytitle}</p>
        <Icon fontSize="small" />
      </button>
    </div>
  );
};

export default ButtonWrapper;
