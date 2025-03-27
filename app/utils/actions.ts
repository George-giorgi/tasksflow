"use server";

import prisma from "./prisma_connection";

// Employee Block
const createEmployee = async (
  formData: FormData
): Promise<{ success: boolean; employee?: any }> => {
  const { name, surname, email, mobile } = Object.fromEntries(formData);

  try {
    const newEmployee = await prisma.employee.create({
      data: {
        name: name as string,
        surname: surname as string,
        email: email as string,
        mobile: mobile as string,
      },
    });

    return { success: true, employee: newEmployee };
  } catch (error) {
    console.error("Error inserting employee:", error);

    return { success: false };
  }
};

const searchEmployees = async (query?: string) => {
  const employees = await prisma.employee.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { surname: { contains: query, mode: "insensitive" } },
        { email: { contains: query, mode: "insensitive" } },
        { mobile: { contains: query, mode: "insensitive" } },
      ],
    },
    select: {
      id: true,
      name: true,
      surname: true,
      email: true,
      mobile: true,
    },
  });
  return employees;
};

const getEmployeeById = async (id?: string) => {
  if (!id) {
    // Either return null or throw an error if id is missing
    return null;
  }
  const employee = await prisma.employee.findUnique({
    where: { id },
  });

  return employee;
};

const updateEmployee = async (
  id: string | undefined,
  updateData: FormData
): Promise<{ success: boolean; employee?: any }> => {
  const { name, surname, email, mobile } = Object.fromEntries(updateData);
  try {
    const updatedEmployee = await prisma.employee.update({
      where: { id },
      data: {
        name: name as string,
        surname: surname as string,
        email: email as string,
        mobile: mobile as string,
      },
    });
    return { success: true, employee: updatedEmployee };
  } catch (error) {
    console.error("Error updating employee:", error);
    return { success: false };
  }
};

const deleteEmployee = async (id: string) => {
  try {
    const deletedEmployee = await prisma.employee.delete({
      where: { id },
    });
    return true;
  } catch (error) {
    console.error("Error deleting employee:", error);
    throw error;
  }
};

// Tasks Block
const createTasks = async (formData: FormData) => {
  // Expecting the tasks data as a JSON string in the "tasks" field
  const tasksJson = formData.get("tasks");
  if (!tasksJson) {
    throw new Error("No tasks provided");
  }
  const tasks = JSON.parse(tasksJson as string);

  // Insert all tasks using createMany
  try {
    await prisma.task.createMany({
      data: tasks,
    });

    return { success: true };
  } catch (error) {
    console.log("erorrrrrrr for make tasks", error);

    return { success: false };
  }
};

const searchTasks = async (query?: string) => {
  const tasks = await prisma.task.findMany({
    where: {
      OR: [
        { partNumber: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
        { descriptionFromEmployee: { contains: query, mode: "insensitive" } },
        { metalType: { contains: query, mode: "insensitive" } },
        { drawing: { contains: query, mode: "insensitive" } },
      ],
    },
    select: {
      id: true,
      partNumber: true,
      description: true,
      descriptionFromEmployee: true,
      metalType: true,
      drawing: true,
      qty: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return tasks;
};
const findTaskById = async (id?: string) => {
  if (!id) {
    // Either return null or throw an error if id is missing
    return null;
  }
  const task = await prisma.task.findUnique({
    where: { id },
  });
  return task;
};
const updateTask = async (
  id: string | undefined,
  updateData: FormData
): Promise<{ success: boolean; employee?: any }> => {
  const {
    partNumber,
    description,
    descriptionFromEmployee,
    metalType,
    drawing,
    qty,
  } = Object.fromEntries(updateData);
  try {
    const updatedEmployee = await prisma.task.update({
      where: { id },
      data: {
        partNumber: partNumber as string,
        description: description as string,
        descriptionFromEmployee: descriptionFromEmployee as string,
        metalType: metalType as string,
        drawing: drawing as string,
        qty: typeof qty === "string" ? Number(qty) : 0,
      },
    });
    return { success: true, employee: updatedEmployee };
  } catch (error) {
    console.error("Error updating employee:", error);
    return { success: false };
  }
};

const deleteTask = async (
  id: string
): Promise<{ success: boolean; task?: any }> => {
  try {
    const deletedTask = await prisma.task.delete({
      where: { id },
    });
    return { success: true, task: deletedTask };
  } catch (error) {
    console.error("Error deleting task:", error);
    return { success: false };
  }
};

export {
  createEmployee,
  searchEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  createTasks,
  searchTasks,
  findTaskById,
  updateTask,
  deleteTask,
};
