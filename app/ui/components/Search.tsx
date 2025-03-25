"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { deleteEmployee } from "@/app/utils/actions";

const Search = ({
  deletee,
  searchresult,
}: {
  deletee?: boolean;
  searchresult: {
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

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
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
          placeholder={"Search Emoloyee"}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>

      <div className=" h-20 overflow-scroll !mt-5">
        {searchresult.map((empl) => {
          return (
            <div key={empl.id} onClick={() => handleCklick(empl.id)}>
              <Employeees
                // key={empl.id}
                id={empl.id}
                name={empl.name}
                surname={empl.surname}
                email={empl.email}
                mobile={empl.mobile}
                deletee={deletee}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Employeees = ({
  deletee,
  id,
  name,
  surname,
  email,
  mobile,
}: {
  deletee?: boolean;
  id: string;
  name?: string;
  surname?: string;
  email?: string;
  mobile?: string | null;
}) => {
  const handleDeleteClick = async (id: string) => {
    const deleteResult = await deleteEmployee(id);
    if (deleteResult) {
      window.alert("Employeee delete secssesfully");
    } else {
      window.alert("Something wrong for delete");
    }
  };
  return (
    <div className=" flex gap-3 cursor-pointer !mt-3">
      <p>{name}</p>
      <p>{surname}</p>
      <p>{email}</p>
      <p>{mobile}</p>
      <p>
        {deletee && (
          <button
            className="text-white bg-red-400"
            onClick={() => handleDeleteClick(id)}
          >
            delete
          </button>
        )}
      </p>
    </div>
  );
};

export default Search;
