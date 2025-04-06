export type FormState = {
  name: string;
  surname: string;
  email: string;
  mobile: string | null;
};

export type FormStateTasks = {
  partNumber: string;
  description: string;
  metalType: string;
  drawing: string;
  qty: string;
  taskFor: string;
};

export type RegFormState = {
  name: string;
  email: string;
  password: string;
  repeatpassword: string;
};

export type LogFormState = {
  email: string;
  password: string;
};
