import prisma from "@/lib/data/prisma-client";
import { Meal as MealEntity } from "@prisma/client";
import { MealCreateDto, MealResponseDto } from "@/lib/dtos/meal";
import slugify from "slugify";
import xss from "xss";
import { MealFormData } from "@/lib/models";

export const getMeals = async (): Promise<MealResponseDto[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const meal: MealEntity[] = await prisma.meal.findMany();
    // TODO: Map entities to DTOs as needed
    return meal;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Fetch failed:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
    return [];
  }
};

export const getMeal = async (
  slug: string,
): Promise<MealResponseDto | null> => {
  try {
    const meal: MealEntity | null = await prisma.meal.findUnique({
      where: { slug },
    });
    // TODO: Map entities to DTOs as needed
    return meal;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Fetch failed:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
    return null;
  }
};

export const saveMeal = async (
  meal: MealFormData,
): Promise<MealResponseDto | null> => {
  const slug= slugify(meal.title, { lower: true });
  const sanitized = meal.instructions = xss(meal.instructions);
  return null;
};
