import { useEffect, useState, useCallback } from "react";
import "./ReviewSystem.css";

import Reviews from "../Reviews/Reviews";
import ReviewForm from "../ReviewForm/ReviewForm";
import {
  createRatting,
  getRattingListing,
} from "./ReviewSystemService";

const ReviewSystem = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReviews = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getRattingListing();
      setAllReviews(response || []);
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
      setError("Failed to load reviews. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const handleCreateRating = async (payload) => {
    const result = await createRatting(payload);
    fetchReviews();
    return result
  };

  return (
    <section className="reviews-system-section">
      <h1 className="about-heading">Customer Reviews & Ratings</h1>

      {loading ? (
        <div className="page-loader">
          <div className="page-loader-circle"></div>
        </div>
      ) : (
        <div className="review-container">
          <div className="reviews-wrapper">
            {/* {loading && <p className="review-loading">Loading reviews...</p>} */}

            {error && <p className="review-error">{error}</p>}

            {!loading && !error && (
              <Reviews allReviews={allReviews} />
            )}
          </div>

          {/* RIGHT: REVIEW FORM */}
          <div className="review-form-wrapper">
            <ReviewForm createRatting={handleCreateRating} />
          </div>
        </div >)}


    </section>
  );
};

export default ReviewSystem;
