import { SearchResultEmployee } from "@/app/utils/definitions";
import { searchEmployees } from "@/app/utils/actions";
import Employee from "../Employee/Employee";

const SearchedListsWrapper = async ({
  querystring,
  queryfor,
}: {
  querystring: string;
  queryfor: string;
}) => {
  // const result = await searchEmployees(querystring);

  return (
    <div className=" bg-amber-600 !mb-12">
      <p>list search yourself</p>
    </div>
  );
};

export default SearchedListsWrapper;
