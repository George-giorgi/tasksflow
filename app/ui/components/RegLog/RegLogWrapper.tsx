"use client";

import { useState } from "react";
import Reg from "./Reg";
import Log from "./Log";

const RegLogWrapper = () => {
  const [toggle, setToggle] = useState<"log" | "reg">("log");

  return (
    <div className="max-w-md mx-auto text-center space-y-4">
      <div className="flex justify-center gap-4 mb-4 text-black font-semibold">
        <button
          className={`  px-4 py-2 rounded-lg cursor-pointer !text-sm hover:bg-blue-600  ${
            toggle === "log" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setToggle("log")}
        >
          Login
        </button>
        <button
          className={` px-4 py-2 rounded-lg cursor-pointer !text-sm hover:bg-blue-600      ${
            toggle === "reg" ? "bg-blue-600 text-white " : "bg-gray-200  "
          }`}
          onClick={() => setToggle("reg")}
        >
          Register
        </button>
      </div>

      {toggle === "log" ? <Log /> : <Reg />}
    </div>
  );
};

export default RegLogWrapper;
