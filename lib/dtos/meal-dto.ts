export default interface MealDTO {
  id: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

// TODO: DTO is an exact copy of the database table. We need mappers to avoid passing unnecessary data to the UI.