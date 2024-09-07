import React from "react";
import logoImage from "../assest/banner/raju.png";

const Logo = ({ size }) => {
  return (
    <div
      className="flex items-center pl-2"
      style={{ width: size, height: size }}
    >
      <img
        src={logoImage}
        alt="Logo"
        className="w-12 h-12 object-cover rounded-full"
      />
    </div>
  );
};

export default Logo;
