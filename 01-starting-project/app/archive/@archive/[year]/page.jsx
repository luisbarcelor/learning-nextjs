import React from "react";
import { getNewsForYear } from "@/lib/news";
import NewsList from "@/components/news-list";

const FilteredNewsPage = async ({ params }) => {
  const year = await params.year;
  const news = getNewsForYear(year);
  
  return (
    <>
      <h2>Year: {year}</h2>
      <NewsList news={news} />
    </>
  );
};

export default FilteredNewsPage;