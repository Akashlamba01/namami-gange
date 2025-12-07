import { useState } from "react";
import { toast } from "react-toastify";
// import "./ReviewForm.css";

const ReviewForm = () => {
  const [reviewerName, setReviewerName] = useState("");
  const [reviewerEmail, setReviewerEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (images.length > 2) {
      toast.error("You can upload a maximum of 2 images.");
      return;
    }

    if (rating === 0 || rating > 5) {
      toast.error("Please select rating befor submit reivew!")
      return
    }

    alert(`Thank you, ${reviewerName}! and the mail address is ${reviewerEmail}, You rated ${rating} star(s) ⭐`);
    toast.success("Porduct Rated Successfully!")
    setReviewerName("");
    setReviewerEmail("");
    setImages([]);
    setRating(0);
    setReviewText("");
  };

  return (
    <div>
      <section className="review-form">
        <h3>Leave a Review</h3>

        <form onSubmit={handleSubmitReview} encType="multipart/form-data">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name *"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="email@gamil.com *"
            value={reviewerEmail}
            onChange={(e) => setReviewerEmail(e.target.value)}
            required
          />

          {/* Rating */}
          <div className="rating" role="radiogroup" aria-label="Rating">
            <label>Rating:</label>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`star ${rating >= star ? "active" : ""}`}
                onClick={() => setRating(star)}
                aria-checked={rating === star}
                role="radio"
                title={`${star} star${star > 1 ? "s" : ""}`}
                style={{ fontSize: 24, background: "none", border: "none", cursor: "pointer" }}
              >
                ⭐
              </button>
            ))}
          </div>


          {/* Review Text */}
          <textarea
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          />

          {/* Optional Image */}
          <label className="file-label">Upload Image (optional):</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files);
              if (files.length > 2) {
                toast.error("You can upload a maximum of 2 images.");
                setImages([]);
                return;
              }
              setImages(files);
            }}
          />

          {/* Submit */}
          <button type="submit">Submit Review</button>
        </form>
      </section>
      <div>
        {/* <img
          src="https://images.unsplash.com/photo-1599058917212-d750089bc03b?q=80&w=800&auto=format&fit=crop"
          alt="review banner"
        /> */}
      </div>
    </div>
  );
};

export default ReviewForm;
