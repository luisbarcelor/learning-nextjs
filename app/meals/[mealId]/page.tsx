import React from "react";
import Link from "next/link";

interface MealPageProps {
  params: {
    mealId: string;
  };
}

const MealPage = async ({ params }: MealPageProps) => {
  const { mealId } = await params;

  return (
    <main>
      <h1>
        Meal Page
      </h1>
      <p>{mealId} page.</p>
      <div>
        <Link href="/meals">
          Go back
        </Link>
      </div>
    </main>
  );
};

export default MealPage;
