"use server";

import { OneEmployee } from "./definitions/employee/definitions";
import prisma from "./prisma_connection";

// Employee Block

// +
const createEmployee = async (
  formData: FormData
): Promise<{ success: boolean; employee: object; message: string }> => {
  const { name, surname, email, mobile } = Object.fromEntries(formData);
  const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

  // // Simulated DB response function
  // async function simulatedDbResponse() {
  //   // Wait for 2 seconds (2000 ms)
  //   await delay(2000);
  //   // Return a simulated response
  //   return { success: true, data: "Sample data from DB" };
  // }
  // await simulatedDbResponse();
  try {
    const newEmployee = await prisma.employee.create({
      data: {
        name: name as string,
        surname: surname as string,
        email: email as string,
        mobile: mobile as string,
      },
    });

    return {
      success: true,
      employee: newEmployee,
      message: "Employee added successfully!",
    };
  } catch (error) {
    console.error("Error inserting employee:", error);

    return {
      success: false,
      employee: {},
      message: "Failed to add employee.",
    };
  }
};

// +
const searchEmployees = async (
  query: string
): Promise<{
  success: boolean;
  employees?: OneEmployee[];
  message: string;
}> => {
  if (!query) return { success: false, message: "No Search Result" };

  try {
    const employees = await prisma.employee.findMany({
      where: {
        OR: ["name", "surname", "email", "mobile"].map((field) => ({
          [field]: { contains: query, mode: "insensitive" },
        })),
      },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        mobile: true,
      },
    });

    return {
      success: true,
      employees,
      ...(employees.length === 0
        ? { message: "No Search Result" }
        : { message: "" }),
    };
  } catch (error) {
    console.error("Error searching employees:", error);
    return {
      success: false,
      message: "Failed to search employees.",
    };
  }
};

const getEmployeeById = async (id: string) => {
  try {
    const employee = await prisma.employee.findUnique({ where: { id } });
    if (!employee) {
      return { success: false, message: "Employee not found" };
    }
    return { success: true, employee };
  } catch (error) {
    console.error("Error fetching employee:", error);
    return { success: false, message: "Failed to fetch employee" };
  }
};

const updateEmployee = async (formData: FormData) => {
  try {
    const { id, name, surname, email, mobile } = Object.fromEntries(formData);

    await prisma.employee.update({
      where: { id: id as string },
      data: {
        name: name as string,
        surname: surname as string,
        email: email as string,
        mobile: mobile as string,
      },
    });

    return { success: true, message: "Employee updated successfully." };
  } catch (error) {
    console.error("Error updating employee:", error);
    return { success: false, message: "Failed to update employee." };
  }
};

const deleteEmployee = async (id: string) => {
  try {
    await prisma.employee.delete({ where: { id } });
    // throw new Error("Failed to Delete Invoice");
    return { success: true, message: "Employee deleted successfully" };
  } catch (error) {
    console.error("Error deleting employee:", error);
    return { success: false, message: "Failed to delete employee" };
  }
};

// Tasks Block
const createTasks = async (formData: FormData) => {
  // Expecting the tasks data as a JSON string in the "tasks" field

  const tasksJson = formData.get("tasks");
  console.log(tasksJson);
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
        qty: qty as "string",
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
async function clockInTask(userId: string, taskId: string) {
  // Optionally, check if there is already an open session for this user
  const openSession = await prisma.taskSession.findFirst({
    where: { userId, clockOut: null },
  });

  if (openSession) {
    throw new Error(
      "User already clocked in. Please clock out before starting a new task."
    );
  }

  const newSession = await prisma.taskSession.create({
    data: {
      userId,
      taskId,
      // clockIn will default to now()
    },
  });
  return newSession;
}
async function clockOutTask(userId: string) {
  // Find the currently active session (clockOut is null)
  const openSession = await prisma.taskSession.findFirst({
    where: { userId, clockOut: null },
  });
  if (!openSession) {
    throw new Error("No active clock in found for the user.");
  }

  const updatedSession = await prisma.taskSession.update({
    where: { id: openSession.id },
    data: {
      clockOut: new Date(),
    },
  });
  return updatedSession;
}
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
  clockInTask,
  clockOutTask,
};
