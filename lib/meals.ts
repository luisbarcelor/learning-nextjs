import prisma from "@/lib/data/prisma-client"; 
import { Meal } from "@prisma/client";

export const getMeals = async (): Promise<Meal[]> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  try {
    return await prisma.meal.findMany();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Fetch failed:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
    return [];
  }
}