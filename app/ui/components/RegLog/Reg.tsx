"use client";

import { useSearchParams } from "next/navigation";

const Reg = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div>
      <p>Reg {id}</p>
    </div>
  );
};

export default Reg;
