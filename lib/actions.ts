"use server";

export const shareMealAction = async (formData: FormData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creatorEmail: formData.get("email"),
  };

  console.log(meal);
};