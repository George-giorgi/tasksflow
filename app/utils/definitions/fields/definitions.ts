type EmployeeFields = "name" | "surname" | "email" | "mobile";
type RegFields = "name" | "email" | "password" | "repeatpassword";
type LogFields = "email" | "password";
type TaskFields =
  | "partNumber"
  | "metalType"
  | "qty"
  | "description"
  | "metalType"
  | "drawing"
  | "taskFor";

export const employeeFields: EmployeeFields[] = [
  "name",
  "surname",
  "email",
  "mobile",
];

export const taskFields: TaskFields[] = [
  "partNumber",
  "metalType",
  "qty",
  "description",
  "drawing",
  "taskFor",
];

export const regfields: RegFields[] = [
  "name",
  "email",
  "password",
  "repeatpassword",
];
export const logfields: LogFields[] = ["email", "password"];
