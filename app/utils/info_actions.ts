import prisma from "./prisma_connection";

const countEmployees = async () => {
  try {
    const totalEmployees = await prisma.employee.count();
    console.log(`Total Employees: ${totalEmployees}`);
    return totalEmployees;
  } catch (error) {
    console.error("Error counting employees:", error);
    throw error;
  }
};
const countTasks = async () => {
  try {
    const taskCount = await prisma.task.count();
    console.log("Total number of tasks:", taskCount);
    return taskCount;
  } catch (error) {
    console.error("Error counting tasks:", error);
    throw error;
  }
};

export { countEmployees, countTasks };
