import { notFound } from "next/navigation";

export const validateDynamicMealParams = async (params: Promise<unknown>) => {
  const unknownParams = await params;
  if (
    typeof unknownParams !== "object" ||
    unknownParams === null ||
    !("mealId" in unknownParams) ||
    typeof unknownParams.mealId !== "string"
  ) {
    notFound();
  }
  
  return unknownParams.mealId;
};
