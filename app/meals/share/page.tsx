import React from "react";
import Link from "next/link";

const ShareMealsPage = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold text-white text-center my-5">
        Share Meals Page
      </h1>
      <div>
        <Link className="flex justify-center text-yellow-500" href="/">
          Go back
        </Link>
      </div>
    </main>
  );
};

export default ShareMealsPage;