import { useState } from "react";
import { toast } from "react-toastify";
// import { createRatting } from "./reviewService";
// import "./ReviewForm.css";

const ReviewForm = ({ createRatting }) => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    ratting: 0,
    reviewText: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleratting = (star) => {
    console.log("Selected ratting:", star);
    setFormData((prev) => ({ ...prev, ratting: star }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 2) {
      toast.error("You can upload a maximum of 2 images.");
      return;
    }
    setFormData((prev) => ({ ...prev, images: files }));
  };

  const [loading, setLoading] = useState(false);

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    const { fullName, email, ratting } = formData;

    if (!fullName || !email) {
      toast.error("Name and Email are required");
      return;
    }

    if (ratting < 1 || ratting > 5) {
      toast.error("Please select a valid ratting");
      return;
    }

    try {
      setLoading(true);
      const res = await createRatting(formData);

      if (!res?.success) {
        throw new Error(res?.message || "Failed to submit review");
      }

      toast.success("Product rated successfully!");
      alert(`Thank you, ${fullName}! and the mail address is ${email}, You rated ${ratting} star(s) ⭐`);

      setFormData({
        fullName: "",
        email: "",
        ratting: 0,
        reviewText: "",
        images: [],
      });

    } catch (error) {
      console.error("Failed to submit review:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="email@gamil.com *"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* ratting */}
          <div className="rating">
            <label>Ratting:</label>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`star ${formData.ratting >= star ? "active" : ""}`}
                onClick={() => handleratting(star)}
                style={{ fontSize: 24, background: "none", border: "none" }}
              >
                ⭐
              </button>
            ))}
          </div>

          {/* Review Text */}
          <textarea
            name="reviewText"
            placeholder="Write your review..."
            value={formData.reviewText}
            onChange={handleChange}
            required
          />

          {/* Optional Image */}
          <label>Upload Images (max 2)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />

          {/* Submit */}
          {/* <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Review"}
          </button> */}

          <button
            type="submit"
            disabled={loading}
            className={`submit-btn ${loading ? "loading" : ""}`}
          >
            {loading ? "⏳ Submitting" : "Submit Review"}
          </button>
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
