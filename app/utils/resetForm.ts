import { FormState, FormStateTasks } from "./definitions/form/definitions";

const resetForm = (): FormState => {
  return {
    name: "",
    surname: "",
    email: "",
    mobile: "",
  };
};

const resetTaskForm = (): FormStateTasks[] => {
  const defaultState = [
    {
      partNumber: "",
      description: "",
      metalType: "",
      drawing: "",
      qty: "",
      taskFor: "",
    },
  ];
  return defaultState;
};

export { resetForm, resetTaskForm };
