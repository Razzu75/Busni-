import React, { useState } from "react";
import ReviewForm from "./Reviewform";
import ReviewDisplay from "./ReviewDisplay";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]); // Ensure this is an array

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]); // Add new review to the existing reviews
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Product Reviews</h1>
      <ReviewForm onSubmit={handleReviewSubmit} />
      <p>Total Reviews: {reviews.length}</p>
      <ReviewDisplay reviews={reviews} />
    </div>
  );
};

export default ReviewPage;
