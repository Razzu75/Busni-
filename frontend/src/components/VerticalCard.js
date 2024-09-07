import React, { useContext } from "react";
import scrollTop from "../helpers/scrollTop";
import displayINRCurrency from "../helpers/displayCurrency";
import Context from "../context";
import addToCart from "../helpers/addToCart";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhone, FaFacebookMessenger } from "react-icons/fa";
import StarRating from "./StarRating";

const VerticalCard = ({ loading, data = [] }) => {
  const loadingList = new Array(13).fill(null);
  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const handleWhatsApp = (product) => {
    const message = `Hi, I'm interested in the product: ${
      product.productName
    } priced at ${displayINRCurrency(product.sellingPrice)}. Image: ${
      product?.productImage[0]
    }`;
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

  return (
    <div className="container mx-auto px-2 my-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading
          ? loadingList.map((_, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-sm shadow-sm p-2"
              >
                {/* Loading skeletons */}
              </div>
            ))
          : data.map((product, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-sm shadow-sm flex flex-col justify-between p-2"
              >
                <Link
                  to={"/product/" + product?._id}
                  className="flex-grow"
                  onClick={scrollTop}
                >
                  <div className="bg-slate-200 h-32 p-2 flex justify-center items-center">
                    <img
                      src={product?.productImage[0]}
                      alt={product?.productName || "Product image"}
                      className="object-contain h-full w-full hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-1 flex flex-col">
                    <div>
                      <h2 className="font-medium text-sm md:text-base text-ellipsis line-clamp-1 text-black">
                        {product?.productName || "Product Name"}
                      </h2>
                      <p className="capitalize text-slate-500 text-xs">
                        {product?.category || "Category"}
                      </p>
                      <span className="text-xs inline-block px-1 py-1 rounded-full bg-pink-500 text-white font-medium">
                        Sold: {product?.sold}
                      </span>
                      <div className="flex flex-col md:flex-row gap-1 items-start md:items-center mt-1">
                        <p className="text-green-600 font-medium text-xs whitespace-nowrap">
                          {displayINRCurrency(product?.sellingPrice) || "Price"}
                        </p>
                        <p className="text-slate-500 line-through text-xs whitespace-nowrap">
                          {displayINRCurrency(product?.price) || "Old Price"}
                        </p>
                      </div>
                      <StarRating rating={4} />
                    </div>
                  </div>
                </Link>
                <div className="p-1 flex flex-col gap-1">
                  <button
                    className="text-xs bg-red-600 hover:bg-green-700 text-white px-2 py-1 rounded-full w-full"
                    onClick={(e) => handleAddToCart(e, product?._id)}
                  >
                    Add to Cart
                  </button>
                  <div className="flex justify-between gap-1">
                    <button
                      className="flex items-center gap-1 text-green-600 hover:text-green-700 text-sm w-1/3 justify-center"
                      onClick={() => handleWhatsApp(product)}
                    >
                      <FaWhatsapp />
                    </button>
                    <button
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm w-1/3 justify-center"
                      onClick={() => handleMessenger(product)}
                    >
                      <FaFacebookMessenger />
                    </button>
                    <button
                      className="flex items-center gap-1 text-orange-600 hover:text-orange-700 text-sm w-1/3 justify-center"
                      onClick={handleCall}
                    >
                      <FaPhone />
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default VerticalCard;
