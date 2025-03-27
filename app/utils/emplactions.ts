import prisma from "./prisma_connection";
const getLastTenEmployees = async () => {
  const employees = await prisma.employee.findMany({
    orderBy: {
      createdAt: "desc", // Order by creation date in descending order
    },
    take: 10, // Limit the result to 10 records
  });
  return employees;
};

export { getLastTenEmployees };
