import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import image from "../assest/banner/cashondelivery.png";
import image1 from "../assest/Payment/esewa.png";
import image2 from "../assest/Payment/Khalti.png";
import image3 from "../assest/Payment/phonepay.png";
import logo from "../assest/banner/raju.png";
import Bhanu from "../assest/banner/Bhanu.jpg";
import Care from "../assest/banner/Care.jpg";
import chatImage1 from "../assest/TEAM/dahal.png";
import chatImage2 from "../assest/TEAM/bhawana.png";
import chatImage3 from "../assest/TEAM/santosh.png";
import chatImage4 from "../assest/TEAM/niyaj.png";

const Footer = () => {
  return (
    <footer className="bg-slate-200 bg-blue-100">
      <div className="container mx-auto p-4">
        {/* Logo and Company Name */}
        <div className="flex flex-col items-center justify-center mt-2">
          <img
            src={logo}
            alt="Busni Logo"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h1 className="text-center font-bold text-2xl text-orange-600">
            Busni Online Store
          </h1>
        </div>
        <div className="flex flex-col items-center text-center space-y-2 mb-6 md:mb-0">
          <FaLocationDot className="text-red-600 mr-1" />
          <p className="text-blue-600 font-bold">Kathmandu, Nepal-44600</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-6">
        {/* Co-founder image and name */}
        <div className="flex flex-col items-center text-center space-y-2 mb-6 md:mb-0 md:mr-6">
          <a
            href="https://www.facebook.com/AdvBhanuBhandari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Bhanu}
              alt="Co-founder"
              className="w-24 h-24 rounded-full mb-2"
            />
          </a>
          <p className="mb-1 font-bold">Bhanubhakta Bhandari</p>
          <p className="mt-1 text-blue-600">
            <small> CEO & Co-Founder</small>
          </p>
          <p className="mt-1 w-48 text-center">
            <small>
              <i>
                "Our mission is to bring you the best products with exceptional
                <br /> service."
              </i>
            </small>
          </p>
        </div>

        {/* Customer Care Links */}
        <div className="flex flex-col items-center text-center space-y-2 mb-6 md:mb-0 md:mr-6">
          <img
            src={Care}
            alt="care"
            title="Customer Care no:+977-9805801192"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h1 className="font-bold mb-2">Customer Care</h1>
          <div className="flex flex-col space-y-1">
            <Link to="/about-busni" className="text-blue-600 hover:underline">
              About Busni
            </Link>
            <Link to="/contact" className="text-blue-600 hover:underline">
              Contact Us
            </Link>
            <Link to="/careers" className="text-blue-600 hover:underline">
              Careers
            </Link>
            <Link to="/help-center" className="text-blue-600 hover:underline">
              Help Center
            </Link>
          </div>
          <h1 className="font-bold mt-4">Follow Us</h1>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/busnionlinestore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-600" />
            </a>
            <a
              href="https://instagram.com/busnionlinestore?igsh=MThrdmQwbjh0Z2MwNg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-red-600" />
            </a>
            <a
              href="https://wa.me/message/WZERVWOGBN7MK1?src=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-green-600" />
            </a>
            <a
              href="mailto:busnitrade@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosMail className="text-red-600" />
            </a>
            <a
              href="https://www.youtube.com/@busnionlinestore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-red-600" />
            </a>
          </div>
        </div>

        {/* Payment Modes */}
        <div className="mt-5 flex flex-col items-center space-y-2">
          <h1 className="font-bold text-sm mb-2">Payment Modes</h1>
          <div className="flex flex-wrap justify-center gap-2">
            <img
              src={image}
              alt="Payment Method"
              className="w-10 h-10 rounded-full"
            />
            <img
              src={image1}
              alt="Payment Method"
              className="w-10 h-10 rounded-full"
            />
            <img
              src={image2}
              alt="Payment Method"
              className="w-10 h-10 rounded-full"
            />
            <img
              src={image3}
              alt="Payment Method"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="mt-2 flex flex-col items-center space-y-1">
            <h1 className="font-bold mb-1">Chat with us</h1>
            <div className="flex flex-wrap justify-center gap-2">
              <a
                href="https://wa.me/qr/7QBPM2DPQUIDG1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={chatImage1}
                  alt="Chat 1"
                  className="w-20 h-20 md:w-20 md:h-20 rounded-full"
                />
              </a>
              <a
                href="https://www.instagram.com/bhawana022b?igsh=OHZoZGVuMjFkODgx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={chatImage2}
                  alt="Chat 2"
                  className="w-20 h-20 md:w-20 md:h-20 rounded-full"
                />
              </a>
              <a
                href="https://wa.me/qr/AWGELTW5N7GNJ1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={chatImage3}
                  alt="Chat 3"
                  className="w-20 h-20 md:w-20 md:h-20 rounded-full"
                />
              </a>
              <a
                href="https://wa.me/qr/TYYC7A5OCBK7G1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={chatImage4}
                  alt="Chat 4"
                  className="w-20 h-20 md:w-20 md:h-20 rounded-full"
                />
              </a>
            </div>
          </div>
          <p className="text-center mt-1 text-orange-600">
            <small>
              <i>Gov.Reg.No:338150</i>
            </small>
          </p>

          <p className="text-center mt-1 text-orange-600">
            <small>
              <i>© Busni Trade, All Rights Reserved.</i>
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
