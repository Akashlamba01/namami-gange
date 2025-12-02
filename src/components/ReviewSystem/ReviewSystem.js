import "./ReviewSystem.css";
import Reviews from "../Reviews/Reviews";
import ReviewForm from "../ReviewForm/ReviewForm";

const ReviewSystem = () => {
  return (
    <div className="reviews-system-section">
      <h1 className="about-heading">Customer Reviews & Ratings</h1>
      <div className="review-container">
        <Reviews />
        <ReviewForm />
      </div>
    </div>
  );
};

export default ReviewSystem;
