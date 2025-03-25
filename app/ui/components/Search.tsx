"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Search = ({
  searchresult,
}: {
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
                name={empl.name}
                surname={empl.surname}
                email={empl.email}
                mobile={empl.mobile}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Employeees = ({
  name,
  surname,
  email,
  mobile,
}: {
  name: string;
  surname: string;
  email: string;
  mobile: string | null;
}) => {
  return (
    <div className=" flex gap-3 cursor-pointer">
      <p>{name}</p>
      <p>{surname}</p>
      <p>{email}</p>
      <p>{mobile}</p>
    </div>
  );
};

export default Search;
