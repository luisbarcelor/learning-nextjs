import React from "react";
import Link from "next/link";

const MealsPage = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold text-white text-center my-5">
        Meals Page
      </h1>
      <div>
        <ul className="flex justify-center gap-4 text-yellow-500 pb-4">
          <li><Link href="/meals/curry-chicken">Curry chicken</Link></li>
          <li><Link href="/meals/steak">Steak</Link></li>
          <li><Link href="/meals/carbonara">Carbonara</Link></li>
        </ul>
        <Link className="flex justify-center text-yellow-500" href="/">
          Go back
        </Link>
      </div>
    </main>
  );
};

export default MealsPage;