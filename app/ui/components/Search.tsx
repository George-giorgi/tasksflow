"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { Employeees } from "./Employeees";

const Search = ({
  title,
  deletee,
  searchresult,
}: {
  title: string;
  deletee?: boolean;
  searchresult?: {
    id: string;
    name: string;
    surname: string;
    email: string;
    mobile: string | null;
  }[];
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // function handleSearch(term: string) {
  //   const params = new URLSearchParams(searchParams);
  //   if (term) {
  //     if (title == "Search Employee") {
  //       params.set("query", term);
  //     }
  //     if (title == "Search Task") {
  //       params.set("task_query", term);
  //     }
  //   } else {
  //     params.delete("query");
  //     params.delete("task_query");
  //     params.delete("id");
  //   }
  //   replace(`${pathname}?${params.toString()}`);
  // }
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    // Define a mapping from title to query parameter key
    const searchMapping: { [key: string]: string } = {
      "Search Employee": "query",
      "Search Task": "task_query",
    };
    if (term) {
      if (searchMapping[title]) {
        params.set(searchMapping[title], term);
      }
    } else {
      // Remove all possible query params defined in the mapping
      Object.values(searchMapping).forEach((key) => params.delete(key));
      params.delete("id");
    }

    replace(`${pathname}?${params.toString()}`);
  }
  const handleCklick = (id: string) => {
    const params = new URLSearchParams(searchParams);

    if (id) {
      params.set("id", id);
    } else {
      console.log("No Id");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div>
      <div>
        <input
          className="peer block !mt-10 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={title}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>

      <div className=" h-20 overflow-scroll !mt-5">
        {searchresult?.map((empl) => {
          return (
            <div
              className=" flex gap-3 items-center justify-center  !mt-4"
              key={empl.id}
            >
              <Employeees
                // key={empl.id}
                id={empl.id}
                name={empl.name}
                surname={empl.surname}
                email={empl.email}
                mobile={empl.mobile}
                deletee={deletee}
              />
              <button
                className=" bg-amber-400"
                onClick={() => handleCklick(empl.id)}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
