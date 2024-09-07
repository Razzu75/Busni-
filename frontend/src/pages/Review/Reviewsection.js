import React, { useState } from "react";
import ReviewForm from "./Reviewform";
import ReviewDisplay from "./ReviewDisplay";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]); // Add new review to the existing reviews array
  };

  return (
    <div>
      <ReviewForm onSubmit={handleAddReview} />
      <ReviewDisplay reviews={reviews} />
      <p>Total Reviews: {reviews.length}</p>{" "}
      {/* Display total number of reviews */}
    </div>
  );
};

export default ReviewSection;
