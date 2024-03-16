import React from "react";
import FeaturedCard from "./FeaturedCard";

const data = [
  {
    img: "/icons/natural.png",
    title: "Naturally Derived",
    desc: "Natural and organic beauty product",
  },
  {
    img: "/icons/free-delivery.png",
    title: "Free Shipping",
    desc: "Free shipping on all orders over $99",
  },
  {
    img: "/icons/money.png",
    title: "Secure Payment",
    desc: "Fully protected when payning online",
  },
];

const Feature = () => {
  return (
    <div className="container pt-6 sm:pt-14">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {data.map((item) => (
          <FeaturedCard
            key={item.title}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
