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
      <h1 className="text-3xl font-bold text-white text-center my-5">
        Meal Page
      </h1>
      <p className="pb-4 text-center text-white text-xl">{mealId} page.</p>
      <div>
        <Link className="flex justify-center text-yellow-500" href="/meals">
          Go back
        </Link>
      </div>
    </main>
  );
};

export default MealPage;
