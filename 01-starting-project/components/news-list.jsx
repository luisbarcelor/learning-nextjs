import React from "react";
import Link from "next/link";
import Image from "next/image";

const NewsList = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 3",
              }}
            >
              <Image
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
                fill
              />
            </div>
            {newsItem.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
