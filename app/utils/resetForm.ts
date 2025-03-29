import { FormState } from "./definitions/definitions";

const resetForm = (): FormState => {
  return {
    name: "",
    surname: "",
    email: "",
    mobile: "",
  };
};

export { resetForm };
