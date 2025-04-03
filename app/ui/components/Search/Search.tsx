"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Search = ({ title }: { title: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchValue, setSearchValue] = useState("");

  // Watch for `id` changes — when it changes, reset input
  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setSearchValue(""); // clear input when id appears/changes
    }
  }, [searchParams.get("id")]); // triggers when `id` changes

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    setSearchValue(term);

    if (term) {
      params.set("querystring", term);
    } else {
      params.delete("querystring");
      params.delete("id");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <input
          className="bg-transparent border-b-2 border-white py-2 px-3 focus:border-[var(--hover-color)] outline-none placeholder:text-sm placeholder:text-[var(--smaltext-color)] rounded-lg text-center"
          placeholder={title}
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Search;
