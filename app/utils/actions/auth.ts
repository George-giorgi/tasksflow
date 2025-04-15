"use server";

import prisma from "../prisma_connection";

import { hashPassword, comparePasswords } from "../hash";

export const registerUser = async (formData: FormData) => {
  try {
    // Convert FormData to a regular object with correct types
    const formEntries = Object.fromEntries(formData.entries());
    const { employeeId, name, email, password } = formEntries;

    // Check if the email is already in use
    const existing = await prisma.user.findUnique({
      where: { email: email as string },
    });

    if (existing) {
      return { success: false, message: "Email already in use" };
    }

    // Hash the password
    const hashed = await hashPassword(password as string);

    // Create the user in the database
    await prisma.user.create({
      data: {
        name: name as string,
        email: email as string,
        password: hashed,
        employeeId: employeeId as string,
      },
    });

    return { success: true, message: "User registered successfully" };
  } catch (error) {
    console.error("Error registering user:", error);
    return { success: false, message: "Failed to register user" };
  }
};

export const loginUser = async (formData: FormData) => {
  const formEntries = Object.fromEntries(formData.entries());
  const { email, password } = formEntries;

  const user = await prisma.user.findUnique({
    where: { email: email as string },
  });

  if (!user) return { success: false, message: "Invalid credentials" };

  const valid = await comparePasswords(password as string, user.password);
  if (!valid) return { success: false, message: "Invalid credentials" };

  // ✅ Return user without password
  const { password: _removed, ...safeUser } = user;

  return { success: true, user: safeUser, message: "Login successfully" };
};
