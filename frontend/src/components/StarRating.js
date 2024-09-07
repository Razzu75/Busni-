import React from "react";

const StarRating = ({ rating }) => {
  const maxRating = 5; // Maximum number of stars
  const filledStars = Math.floor(rating); // Number of filled stars
  const emptyStars = maxRating - filledStars; // Number of empty stars

  return (
    <div>
      {Array(filledStars)
        .fill(0)
        .map((_, index) => (
          <span key={index} style={{ color: "#FFCC00", fontSize: "24px" }}>
            &#9733;
          </span>
        ))}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <span key={index} style={{ color: "#d3d3d3", fontSize: "24px" }}>
            &#9733;
          </span>
        ))}
    </div>
  );
};

export default StarRating;
