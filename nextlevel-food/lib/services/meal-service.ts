import prisma from "@/lib/data/prisma-client";
import { Meal as MealEntity } from "@prisma/client";
import fs from "node:fs";
import { MealCreateDto, MealResponseDto } from "@/lib/dtos/meal";
import xss from "xss";

export const getMeals = async (): Promise<MealResponseDto[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const meals: MealEntity[] = await prisma.meal.findMany();
    // TODO: Map entities to DTOs as needed
    return meals;
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
  mealData: MealCreateDto,
): Promise<MealResponseDto | null> => {
  const extension = mealData.image.name.split(".").pop() ?? "jpg";
  const fileName = `${mealData.slug}.${extension}`;
  const imageSrc = `/images/${fileName}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await mealData.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      console.error("Meal creation failed:", error.message);
      return null;
    }
  });
  
  try {
    const meal: MealEntity = await prisma.meal.create({
      data: {
        ...mealData,
        instructions: xss(mealData.instructions),
        image: imageSrc,
      },
    });
    // TODO: Map entities to DTOs as needed
    return meal;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Meal creation failed:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
    return null;
  }
};