export interface MealResponseDto {
  id: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export interface MealCreateDto {
  slug: string;
  title: string;
  image: File;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export interface MealUpdateDto {
  id: number;
  slug?: string;
  title?: string;
  image?: string;
  summary?: string;
  instructions?: string;
  creator?: string;
  creator_email?: string;
}