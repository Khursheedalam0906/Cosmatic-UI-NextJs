"use client";
import React, { useState, useEffect } from "react";
import { Whisper } from "next/font/google";
import Data from "../utils/ProductData";
import ProductCart, { IProduct } from "./ProductCart";

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const tabData = ["All", "Skill", "Care", "Lipsticks", "Makeup", "Nail & Wax"];

const NewArrival = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState([]);

  const shuffleArray = (array: any) => {
    return array
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: any) => value);
  };

  useEffect(() => {
    setData(shuffleArray(Data).slice(0, 15));
  }, []);

  const handleTab = (index: number) => {
    const tab = tabData[index].toLowerCase();
    setSelectedTab(index);

    if (tab === "all") {
      setData(shuffleArray(Data).slice(0, 15));
      return;
    }

    const filterData = Data.filter((item) => item.category.includes(tab));
    setData(shuffleArray(filterData));
  };

  return (
    <div className="container pt-16">
      <div className="text-center">
        <h3 className={`${whisper.className} text-[20px] text-gray-500`}>
          For your beauty
        </h3>
        <h2 className="font-semibold text-5xl ">New Arrival</h2>
        <ul className="flex flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-xs  sm:text-xl">
          {tabData.map((text, index) => (
            <li
              key={index}
              className={`${
                selectedTab === index && "text-accent"
              } cursor-pointer hover:text-accent`}
              onClick={() => handleTab(index)}
            >
              {text}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 pt-8 ">
          {data.map((item: IProduct) => (
            <ProductCart
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              sale={item.sale}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
