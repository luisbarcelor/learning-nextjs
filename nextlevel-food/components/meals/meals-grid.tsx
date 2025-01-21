import React from "react";
import styles from "./meals-grid.module.css";
import MealItem from "@/components/meals/meal-item";

interface MealsGridProps {
  meals: { 
    id: number;
    title: string;
    image: string;
    slug: string;
    summary: string;
    creator: string;
  }[];
}

const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
