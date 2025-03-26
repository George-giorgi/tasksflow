"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { searchTasks, SearchResultEmployee } from "@/app/utils/definitions";

import { Employeees } from "./Employeees";
import TaskComponent from "./TaskComponent";

const Search = ({
  title,
  deletee,
  searchTasks,
  searchresultEmployee,
}: {
  title: string;
  deletee?: boolean;
  searchTasks?: searchTasks;
  searchresultEmployee?: SearchResultEmployee;
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

      <div className="h-20 overflow-scroll !mt-5">
        {searchresultEmployee && searchresultEmployee.length > 0 ? (
          searchresultEmployee.map((empl) => (
            <div
              key={empl.id}
              className="flex gap-3 items-center justify-center !mt-4"
            >
              <Employeees
                id={empl.id}
                name={empl.name}
                surname={empl.surname}
                email={empl.email}
                mobile={empl.mobile}
                deletee={deletee}
              />
              <button
                className="bg-amber-400"
                onClick={() => handleCklick(empl.id)}
              >
                Edit
              </button>
            </div>
          ))
        ) : searchTasks && searchTasks.length > 0 ? (
          searchTasks.map((task) => (
            <div
              key={task.id}
              className="flex gap-3 items-center justify-center !mt-4"
            >
              <TaskComponent
                id={task.id}
                partNumber={task.partNumber}
                description={task.description}
                descriptionFromEmployee={task.descriptionFromEmployee}
                metalType={task.metalType}
                drawing={task.drawing}
                qty={task.qty}
                createdAt={task.createdAt}
                updatedAt={task.updatedAt}
              />
              <button
                className="bg-amber-400"
                // onClick={() => handleTaskClick(task.id)}
              >
                Edit
              </button>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
