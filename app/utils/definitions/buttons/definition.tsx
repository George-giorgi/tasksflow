export type ButtonKeys = "add" | "update" | "delete";

export type ButtonConfig = {
  keytitle: string;
  className: string;
  icon: React.ComponentType<any>;
  link: string;
};
