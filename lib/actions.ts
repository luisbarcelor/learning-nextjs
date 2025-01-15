"use server";

import { MealFormData } from "@/lib/models";
import { MealCreateDto } from "@/lib/dtos/meal";
import slugify from "slugify";
import { saveMeal } from "@/lib/services/meal-service";
import { redirect } from "next/navigation";

const isInvalidText = (text: string) => {
  return !text || text.trim().length === 0;
};

export const shareMealAction = async (formData: FormData) => {
  const mealFormData: MealFormData = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creatorEmail: formData.get("email") as string,
  };

  if (
    isInvalidText(mealFormData.title) ||
    isInvalidText(mealFormData.summary) ||
    isInvalidText(mealFormData.instructions) ||
    isInvalidText(mealFormData.creator) ||
    isInvalidText(mealFormData.creatorEmail) ||
    !mealFormData.creatorEmail.includes("@") ||
    !mealFormData.image || mealFormData.image.size === 0
  ) {
    throw new Error("Invalid form data");
  }

  const slug = slugify(mealFormData.title, { lower: true });

  const mealCreateDto: MealCreateDto = {
    slug: slug,
    title: mealFormData.title,
    summary: mealFormData.summary,
    instructions: mealFormData.instructions,
    image: mealFormData.image,
    creator: mealFormData.creator,
    creator_email: mealFormData.creatorEmail,
  };

  const response = await saveMeal(mealCreateDto);
  console.log(response);
  redirect("/meals");
};
