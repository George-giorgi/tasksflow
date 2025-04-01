type EmployeeFields = "name" | "surname" | "email" | "mobile";
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
