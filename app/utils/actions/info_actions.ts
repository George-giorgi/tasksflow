import prisma from "../prisma_connection";

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
const getSortedTasks = async () => {
  try {
    const tasks = await prisma.task.findMany();

    const statusOrder = ["initi", "progress", "done"];

    const sortedTasks = tasks.sort(
      (a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)
    );

    return sortedTasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

export { countEmployees, countTasks, getSortedTasks };
