import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";
import YoutubeCarousel from "../context/Youtube";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />

      <HorizontalCardProduct
        category={"new arrivals"}
        heading={"New Arrivals"}
      />
      <HorizontalCardProduct category={"top ranking"} heading={"Top Ranking"} />

      <VerticalCardProduct
        category={"men's clothing"}
        heading={"Men's Clothing"}
      />
      <VerticalCardProduct
        category={"women's clothing"}
        heading={"Women's Clothing"}
      />
      <VerticalCardProduct
        category={"kids wear Toys"}
        heading={"Kids Wear & Toys "}
      />
      <VerticalCardProduct
        category={"shoes accessories"}
        heading={"Shoes & Sports Accessories"}
      />
      <VerticalCardProduct
        category={"luggage bags"}
        heading={"Luggage & Bags "}
      />
      <VerticalCardProduct
        category={"beauty products"}
        heading={"Beauty Products"}
      />
      <VerticalCardProduct
        category={"electronic components"}
        heading={"Electronic Components"}
      />
      <VerticalCardProduct
        category={"home appliances"}
        heading={"Home Appliances"}
      />
      <VerticalCardProduct
        category={"Glossary items"}
        heading={"Glossary Items"}
      />
      <VerticalCardProduct
        category={"Books Stationery"}
        heading={"Books & Stationery"}
      />
      <YoutubeCarousel />
    </div>
  );
};

export default Home;
