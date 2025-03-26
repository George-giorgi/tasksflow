"use server";

import prisma from "./prisma_connection";

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

export {
  createEmployee,
  searchEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  createTasks,
};
