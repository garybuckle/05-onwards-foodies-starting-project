"use server";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
export async function shareMeal(prevState, formData) {
  function isInvalidTextInput(textInput) {
    return !textInput || textInput.trim() === "";
  }

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidTextInput(meal.title) ||
    isInvalidTextInput(meal.summary) ||
    isInvalidTextInput(meal.instructions) ||
    isInvalidTextInput(meal.creator) ||
    isInvalidTextInput(meal.creator) ||
    isInvalidTextInput(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }
  await saveMeal(meal);
  redirect("/meals");
}
