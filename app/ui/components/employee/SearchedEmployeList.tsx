import { SearchResultEmployee } from "@/app/utils/definitions";
import Employee from "./Employee";
const SearchedEmployeeList = (props: {
  searchedList: SearchResultEmployee;
}) => {
  console.log(props.searchedList);

  return (
    <div className=" bg-amber-600 !mb-12">
      <p>list search yourself</p>
      {props.searchedList.map((oneempl) => {
        return <Employee employee={oneempl} />;
      })}
    </div>
  );
};

export default SearchedEmployeeList;
