'use server';

export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    creator_email: formData.get('email'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('name'),
    image: formData.get('image'),
  };
  console.log(meal);
}
