import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useForm } from "react-hook-form";

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRating = (rate) => {
    setRating(rate);
  };

  const submitReview = (data) => {
    data.rating = rating;
    data.image = data.image ? data.image[0] : null; // Ensure only the first image is taken
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitReview)}
      className="p-6 bg-white rounded shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-700"
        >
          Your Rating:
        </label>
        <div className="flex space-x-1 mt-1">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={starValue}
                  className="hidden"
                  onClick={() => handleRating(starValue)}
                />
                <FaStar
                  className={`cursor-pointer ${
                    starValue <= (hover || rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  size={24}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(rating)}
                />
              </label>
            );
          })}
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700"
        >
          Your Review:
        </label>
        <textarea
          id="comment"
          {...register("comment", { required: true })}
          rows="4"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
        {errors.comment && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Image:
        </label>
        <input
          type="file"
          id="image"
          {...register("image")}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
