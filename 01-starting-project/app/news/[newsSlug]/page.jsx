import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

const NewsArticlePage = async ({ params }) => {
  const newsSlug = await params.newsSlug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsSlug,
  );
  
  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <div style={{ position: "relative", width: "10rem", aspectRatio: "1 / 1" }}>
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
        </div>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
      <h1>This is news article: {newsSlug}</h1>
    </article>
  );
};

export default NewsArticlePage;
