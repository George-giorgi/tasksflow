import { ButtonKeys } from "@/app/utils/definitions/buttons/definition";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";

const Button = ({
  key_title,
  isPending,
  isUpdating,
  isLoading,
  isDeleting,
  handleDelete,
}: {
  key_title: ButtonKeys;
  isPending?: boolean;
  isUpdating?: boolean;
  isLoading?: boolean;
  isDeleting?: boolean;
  handleDelete?: () => void;
}) => {
  return (
    <div>
      {key_title == "add" && (
        <button
          type={"submit"}
          className=" flex items-center justify-center w-20 rounded-lg bg-white py-1 px-4 text-[var(--smaltext-color)] hover:text-white hover:bg-[var(--hover-color)] cursor-pointer !mt-4 transition "
        >
          <span className="   font-semibold text-sm">
            {isPending ? (
              "Loading"
            ) : (
              <span className="flex items-center justify-center">
                {key_title} <AddIcon fontSize="small" />
              </span>
            )}
          </span>
        </button>
      )}
      {key_title == "update" && (
        <button
          type="submit"
          className="flex-1 rounded-lg bg-[#FFCC00]  py-1 px-4 text-[var(--mainBg-color)] hover:text-white  transition cursor-pointer  "
          disabled={isUpdating || isLoading}
        >
          {isUpdating ? "Saving..." : "Update"}
          <UpdateIcon fontSize="small" />
        </button>
      )}
      {key_title == "delete" && (
        <button
          type="submit"
          onClick={handleDelete}
          className="flex-1 rounded-lg bg-[var(--hover-color)] text-[var(--mainBg-color)] py-1 px-4 hover:text-white transition cursor-pointer"
          disabled={isDeleting || isLoading}
        >
          {isDeleting ? "Deleting..." : "Delete"}
          <DeleteIcon fontSize="small" />
        </button>
      )}
    </div>
  );
};

export default Button;
