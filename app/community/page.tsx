import React from "react";
import Link from "next/link";

const CommunityPage = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold text-white text-center my-5">
        Community Page
      </h1>
      <div>
        <Link className="flex justify-center text-yellow-500" href="/">
          Go back
        </Link>
      </div>
    </main>
  );
};

export default CommunityPage;