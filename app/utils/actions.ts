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

export { createEmployee };
