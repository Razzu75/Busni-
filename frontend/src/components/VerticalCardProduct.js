import React, { useContext, useEffect, useRef, useState } from "react";
import scrollTop from "../helpers/scrollTop"; // Import scrollTop function
import fetchCategoryWiseProduct from "../helpers/fetchCategoryWiseProduct";
import displayINRCurrency from "../helpers/displayCurrency";
import {
  FaAngleLeft,
  FaAngleRight,
  FaWhatsapp,
  FaPhone,
  FaFacebookMessenger,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import addToCart from "../helpers/addToCart";
import Context from "../context";
import StarRating from "./StarRating";

const HorizontalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);

  const scrollElement = useRef();
  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    e.preventDefault(); // Prevents Link from triggering
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const handleWhatsApp = (product) => {
    const message = `Hi, I'm interested in the product: ${
      product.productName
    } priced at ${displayINRCurrency(product.sellingPrice)}.
        
    View the product image here: ${product.productImage[0]}`;
    const url = `https://wa.me/9779805801192?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  const handleMessenger = (product) => {
    const message = `Hi, I'm interested in the product: ${product.productName}`;
    const url = `https://m.me/1104481592990256?ref=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleCall = () => {
    const phoneNumber = "9805801192"; // Replace with actual phone number
    window.location.href = `tel:${phoneNumber}`;
  };

  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryWiseProduct(category);
    setLoading(false);
    setData(categoryProduct?.data);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300;
  };
  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300;
  };

  return (
    <div className="container mx-auto px-4 my-6 relative h-[350px]">
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>
      <div className="relative">
        <button
          className="bg-white shadow-md rounded-full p-1 absolute left-0 top-1/2 transform -translate-y-1/2 text-lg hidden md:block"
          onClick={scrollLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          className="bg-white shadow-md rounded-full p-1 absolute right-0 top-1/2 transform -translate-y-1/2 text-lg hidden md:block"
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>

        <div
          className="flex gap-4 overflow-x-scroll scrollbar-none transition-all"
          ref={scrollElement}
        >
          {loading
            ? loadingList.map((_, index) => (
                <div
                  key={index}
                  className="w-[200px] bg-white rounded-lg shadow flex flex-col"
                >
                  <div className="bg-slate-200 h-[150px] w-full animate-pulse"></div>{" "}
                  {/* Fixed height for image */}
                  <div className="p-2 flex flex-col flex-1">
                    <h2 className="font-medium text-sm md:text-base text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200"></h2>
                    <p className="capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200 py-2"></p>
                    <div className="flex gap-2">
                      <p className="text-red-600 font-medium text-xs p-1 animate-pulse rounded-full bg-slate-200 w-full py-2"></p>
                      <p className="text-slate-500 line-through text-xs p-1 animate-pulse rounded-full bg-slate-200 w-full py-2"></p>
                    </div>

                    <button className="text-xs text-white px-2 rounded-full bg-slate-200 py-1 animate-pulse"></button>
                  </div>
                </div>
              ))
            : data.map((product, index) => (
                <Link
                  key={index}
                  to={"/product/" + product?._id}
                  className="w-[200px] bg-white rounded-lg shadow flex flex-col"
                  onClick={scrollTop} // Ensure the scrollTop function is called on click
                >
                  <div className="w-full h-[150px] flex justify-center items-center bg-slate-200 rounded-t-lg overflow-hidden">
                    <img
                      src={product.productImage[0]}
                      className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
                      alt={product.productName}
                    />
                  </div>
                  <div className="p-2 flex flex-col flex-1">
                    <h2 className="font-medium text-sm md:text-base text-ellipsis line-clamp-1 text-black">
                      {product?.productName}
                    </h2>
                    <p className="capitalize text-slate-500 text-xs">
                      {product?.category}
                      <span className="text-xs inline-block px-1 py-1 rounded-full bg-pink-500 text-white font-medium">
                        Sold: {product?.sold}
                      </span>
                    </p>

                    <div className="flex gap-2 my-1">
                      <p className="text-green-600 font-medium text-xs">
                        {displayINRCurrency(product?.sellingPrice)}
                      </p>
                      <p className="text-slate-500 line-through text-xs">
                        {displayINRCurrency(product?.price)}
                      </p>
                    </div>
                    <StarRating rating={4} />
                    <button
                      className="text-xs bg-red-600 hover:bg-green-700 text-white px-2 py-1 rounded-full mb-1"
                      onClick={(e) => handleAddToCart(e, product?._id)}
                    >
                      Add to Cart
                    </button>
                    <div className="flex justify-between gap-1">
                      <button
                        className="flex items-center gap-1 text-green-600 hover:text-green-700 w-1/4 justify-center"
                        onClick={() => handleWhatsApp(product)}
                      >
                        <FaWhatsapp />
                      </button>
                      <button
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 w-1/4 justify-center"
                        onClick={() => handleMessenger(product)}
                      >
                        <FaFacebookMessenger />
                      </button>

                      <button
                        className="flex items-center gap-1 text-orange-600 hover:text-orange-700 w-1/4 justify-center"
                        onClick={handleCall}
                      >
                        <FaPhone />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCardProduct;
