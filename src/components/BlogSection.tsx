import React from "react";
import BlogCard from "./BlogCard";

const data = [
  {
    img: "/images/post_1.jpg",
    title: "Lorem ipsum dolor sit amet",
    date: "Sep 27, 2023",
    Comment: 8,
  },
  {
    img: "/images/post_2.webp",
    title: "Lorem ipsum dolor sit amet",
    date: "Sep 25, 2023",
    Comment: 1,
  },
  {
    img: "/images/post_3.jpg",
    title: "Lorem ipsum dolor sit amet",
    date: "Sep 30, 2023",
    Comment: 6,
  },
  {
    img: "/images/post_4.jpg",
    title: "Lorem ipsum dolor sit amet",
    date: "Sep 29, 2023",
    Comment: 4,
  },
];

const BlogSection = () => {
  return (
    <div className="container pt-16 ">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="text-gray-500">
        Present post in a best way to highlight interesting moments of your
        blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8">
        {data.map((item) => (
          <BlogCard
            key={item.date}
            img={item.img}
            title={item.title}
            date={item.date}
            comment={item.Comment}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
