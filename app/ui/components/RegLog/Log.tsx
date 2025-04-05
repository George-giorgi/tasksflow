"use client";

import { useSearchParams } from "next/navigation";

const Log = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div>
      <p>Log {id}</p>
    </div>
  );
};

export default Log;
