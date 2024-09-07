import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewDisplay = ({ reviews = [] }) => {
  if (!reviews.length) {
    return (
      <p className="text-gray-500">No reviews yet. Be the first to review!</p>
    );
  }

  return (
    <div className="p-6 bg-white rounded shadow-md">
      {reviews.map((review, index) => (
        <div key={index} className="mb-6 border-b border-gray-200 pb-4">
          <div className="flex items-center mb-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, starIndex) => (
                <FaStar
                  key={starIndex}
                  className={
                    starIndex < review.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
          <p className="mb-2 text-gray-700">{review.comment}</p>
          {review.image && (
            <div className="mb-2">
              <img
                src={URL.createObjectURL(review.image)}
                alt="Review"
                className="h-20 w-20 h-auto rounded"
              />
            </div>
          )}
          <p className="text-sm text-gray-500">
            Review by {review.name || "Anonymous"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewDisplay;
