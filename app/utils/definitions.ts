type linkItem = {
  href: string;
  title: string;
};

export type NavProps = {
  links: linkItem[];
};

export type searchTasks = {
  id: string;
  partNumber: string;
  description: string;
  descriptionFromEmployee: string;
  metalType: string;
  drawing: string;
  qty: number;
  createdAt: Date;
  updatedAt: Date;
}[];
export type searchOneTasks = {
  id: string;
  partNumber: string;
  description: string;
  descriptionFromEmployee: string;
  metalType: string;
  drawing: string;
  qty: number;
  createdAt: Date;
  updatedAt: Date;
};

export type SearchResultEmployee = {
  id: string;
  name: string;
  surname: string;
  email: string;
  mobile: string | null;
}[];

export type TaskShapeDb = {
  id: string;
  partNumber: string;
  description: string;
  descriptionFromEmployee: string;
  metalType: string;
  drawing: string;
  qty: number;
  createdAt: Date;
  updatedAt: Date;
};
export type Task = {
  id?: string;
  partNumber?: string;
  description?: string;
  descriptionFromEmployee?: string;
  metalType?: string;
  drawing?: string;
  qty?: number;
};
