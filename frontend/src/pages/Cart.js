import React, { useContext, useEffect, useState } from "react";
import SummaryApi from "../common";
import Context from "../context";
import displayINRCurrency from "../helpers/displayCurrency";
import { MdDelete, MdPhone } from "react-icons/md";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const context = useContext(Context);
  const loadingCart = new Array(4).fill(null);

  const fetchData = async () => {
    const response = await fetch(SummaryApi.addToCartProductView.url, {
      method: SummaryApi.addToCartProductView.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });

    const responseData = await response.json();

    if (responseData.success) {
      setData(responseData.data);
    }
  };

  const handleLoading = async () => {
    await fetchData();
  };

  useEffect(() => {
    setLoading(true);
    handleLoading();
    setLoading(false);
  }, []);

  const increaseQty = async (id, qty) => {
    const response = await fetch(SummaryApi.updateCartProduct.url, {
      method: SummaryApi.updateCartProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        quantity: qty + 1,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
    }
  };

  const decraseQty = async (id, qty) => {
    if (qty >= 2) {
      const response = await fetch(SummaryApi.updateCartProduct.url, {
        method: SummaryApi.updateCartProduct.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          quantity: qty - 1,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        fetchData();
      }
    }
  };

  const deleteCartProduct = async (id) => {
    const response = await fetch(SummaryApi.deleteCartProduct.url, {
      method: SummaryApi.deleteCartProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
      context.fetchUserAddToCart();
    }
  };
  const calculateShippingCharge = () => {
    // Calculate shipping charge for unique products
    const uniqueProductIds = new Set(data.map((item) => item.productId._id));
    return uniqueProductIds.size * 110; // 110 INR per unique product
  };
  const totalQty = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
  const totalPrice = data.reduce(
    (preve, curr) => preve + curr.quantity * curr?.productId?.sellingPrice,
    0
  );
  const shippingCharge = calculateShippingCharge();
  const grandTotal = totalPrice + shippingCharge; // Total price including shipping charge
  const handleWhatsAppClick = () => {
    const message = `*Your Cart Details:*\n${data
      .map(
        (item) =>
          `Product: ${item.product.productName}\nQuantity: ${
            item.quantity
          }\nPrice: ${displayINRCurrency(
            item.sellingPrice
          )}\nImage: ${item.product.productImage[0]}\n\n`
      )
      .join("")}*Total Price:* ${displayINRCurrency(totalPrice)}`;

    // URL encode the message and open WhatsApp
    const url = `https://wa.me/9779805801192?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleMessengerClick = () => {
    const message = `Your Cart Details:\n${data
      .map(
        (item) =>
          `Product: ${item.product.productName}\nQuantity: ${
            item.quantity
          }\nPrice: ${displayINRCurrency(
            item.sellingPrice
          )}\nImage: ${item.product.productImage[0]}\n\n`
      )
      .join("")}Total Price: ${displayINRCurrency(totalPrice)}`;
    const url = `https://www.messenger.com/t/yourPageID?message=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleCallClick = () => {
    const phoneNumber = "9805801192"; // Replace with actual phone number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="container mx-auto">
      <div className="text-center text-lg my-3">
        {data.length === 0 && !loading && (
          <p className="bg-white py-5">No Data</p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:justify-between p-4">
        {/***view product */}
        <div className="w-full max-w-3xl">
          {loading
            ? loadingCart?.map((el, index) => {
                return (
                  <div
                    key={el + "Add To Cart Loading" + index}
                    className="w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded"
                  ></div>
                );
              })
            : data.map((product, index) => {
                return (
                  <div
                    key={product?.product._id + "Add To Cart Loading"}
                    className="w-full bg-white h-32 my-2 border border-slate-300  rounded grid grid-cols-[128px,1fr]"
                  >
                    <div className="w-32 h-32 bg-slate-200">
                      <img
                        src={product?.product?.productImage[0]}
                        className="w-full h-full object-scale-down mix-blend-multiply"
                      />
                    </div>
                    <div className="px-4 py-2 relative">
                      {/**delete product */}
                      <div
                        className="absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer"
                        onClick={() => deleteCartProduct(product?.id)}
                      >
                        <MdDelete />
                      </div>

                      <h2 className="text-lg lg:text-xl text-ellipsis line-clamp-1">
                        {product?.product?.productName}
                      </h2>
                      <p className="capitalize text-slate-500">
                        {product?.product.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-red-600 font-medium text-lg">
                          {displayINRCurrency(product?.product?.sellingPrice)}
                        </p>
                        <p className="text-green-600  font-semibold text-lg">
                          {displayINRCurrency(
                            product?.product?.sellingPrice * product?.quantity
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <button
                          className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded "
                          onClick={() =>
                            decraseQty(product?.id, product?.quantity)
                          }
                        >
                          -
                        </button>
                        <span>{product?.quantity}</span>
                        <button
                          className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded "
                          onClick={() =>
                            increaseQty(product?.id, product?.quantity)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>

        {/***summary  */}
        <div className="mt-5 lg:mt-0 w-full max-w-sm relative">
          <div className="h-26 bg-slate-200 border border-slate-300 animate-pulse">
            <p className="text-green-600">
              "Please confirm your payment method: Cash on Delivery or Online
              Payment below the Confirm Order button."
            </p>
          </div>
          {loading ? (
            <div className="h-36 bg-slate-200 border border-slate-300 animate-pulse"></div>
          ) : (
            <div className="h-36 bg-white">
              <h2 className="text-white bg-red-600 px-4 py-1">Summary</h2>

              <div className="flex items-center justify-between px-4 gap-2 font-medium text-lg text-black-600">
                <p>Quantity</p>
                <p>{totalQty}</p>
              </div>
              <div className="flex items-center justify-between px-4 gap-2 font-medium text-lg text-black-600">
                <p>Shipping Charge</p>
                <p>{displayINRCurrency(shippingCharge)}</p>
              </div>

              <div className="flex items-center justify-between px-4 gap-2 font-medium text-lg text-green-600">
                <p>Total Price</p>
                <p>{displayINRCurrency(grandTotal)}</p>
              </div>

              <div className="relative">
                <button
                  className="bg-blue-600 hover:bg-green-700 p-2 text-white w-full mt-2"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Confirm Order
                </button>
                {dropdownOpen && (
                  <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                    <ul>
                      <li
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={handleWhatsAppClick}
                      >
                        <FaWhatsapp className="text-green-500" />
                        <span>WhatsApp</span>
                      </li>
                      <li
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={handleMessengerClick}
                      >
                        <FaFacebookMessenger className="text-blue-500" />
                        <span>Messenger</span>
                      </li>
                      <li
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={handleCallClick}
                      >
                        <MdPhone className="text-red-500" />
                        <span>Call</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
