import React, { useState } from "react";
// import "./Reviews.css";

const allReviews = [
  { name: "Saurabh", rating: 5, text: "Authentic Gangajal with quick delivery. Very satisfied with the quality! Authentic Gangajal with quick delivery. Very satisfied with the quality! Authentic Gangajal with quick delivery. Very satisfied with the quality! Authentic Gangajal with quick delivery. Very satisfied with the quality!", img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4XswNs6lNRPMfJcGyg5P7NRazhxow5Yz-w&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4XswNs6lNRPMfJcGyg5P7NRazhxow5Yz-w&s"] },
  { name: "Sumit Kumar", rating: 4, text: "Good experience overall, will order again. Packing could be improved.", img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4XswNs6lNRPMfJcGyg5P7NRazhxow5Yz-w&s"] },
  { name: "Akash S.", rating: 5, text: "Pure and high-quality Gangajal delivered right to my doorstep.", img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4XswNs6lNRPMfJcGyg5P7NRazhxow5Yz-w&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4XswNs6lNRPMfJcGyg5P7NRazhxow5Yz-w&s"] },
  { name: "Nisha", rating: 5, text: "Fast delivery and excellent product quality.", img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4XswNs6lNRPMfJcGyg5P7NRazhxow5Yz-w&s"] },
  { name: "Rohan", rating: 4, text: "Satisfied with the purity, plan to reorder.", img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4XswNs6lNRPMfJcGyg5P7NRazhxow5Yz-w&s"] },
  { name: "Anita", rating: 5, text: "Very trustworthy site for Gangajal.", img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4XswNs6lNRPMfJcGyg5P7NRazhxow5Yz-w&s"] },
  { name: "Manoj", rating: 3, text: "Price is a bit high but quality is good.", img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4XswNs6lNRPMfJcGyg5P7NRazhxow5Yz-w&s"] },
  { name: "Pooja", rating: 5, text: "Excellent packaging and genuine product.", img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4XswNs6lNRPMfJcGyg5P7NRazhxow5Yz-w&s"] },
  { name: "Vikram", rating: 4, text: "Good shopping experience and timely delivery.", img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4XswNs6lNRPMfJcGyg5P7NRazhxow5Yz-w&s"] },
  { name: "Sunita", rating: 5, text: "Highly recommended for authentic Gangajal.", img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4XswNs6lNRPMfJcGyg5P7NRazhxow5Yz-w&s"] },
];

const Reviews = () => {
  const [reviewsToShow, setReviewsToShow] = useState(3);
  const reviewListRef = React.useRef(null);

  const handleViewMore = () => setReviewsToShow(prev => prev + 3);

  const visibleReviews = allReviews.slice(0, reviewsToShow);
  const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;

  return (
    <section >
      <div className="reviews" id="reviews" aria-label="Customer reviews and ratings">
        <div className="rating-summary">⭐ {avgRating.toFixed(1)} / 5.0 based on {allReviews.length} reviews</div>

        <div className="review-list" ref={reviewListRef}>
          {visibleReviews.map((review, index) => (
            <article key={index} className="review-flex">

              <div className="review-left">
                <p className="review-header">
                  {review.name}
                  <span className="review-stars">
                    {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                  </span>
                  <span className="verified">✔ Verified Purchase</span>
                </p>

                <p className="review-text">{review.text}</p>
              </div>

              {/* Review Images on the RIGHT */}
              {review.img?.length > 0 && (
                <div className="review-right">

                  <div className="img-thumb-wrapper">
                    <img
                      src={review.img[0]}
                      alt="review media"
                      className="review-image-thumb"
                    />

                    {/* +More Badge */}
                    {review.img.length > 1 && (
                      <span className="more-badge">
                        +{review.img.length - 1}
                      </span>
                    )}
                  </div>

                </div>
              )}
            </article>
          ))}
        </div>

        {reviewsToShow < allReviews.length && (
          <div className="view-more-btn">
            <button onClick={handleViewMore}>View More Reviews</button>
          </div>
        )}
      </div>
    </section>

  );
};

export default Reviews;
