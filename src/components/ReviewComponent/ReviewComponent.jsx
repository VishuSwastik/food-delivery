import React, { useState } from 'react';
import styles from './ReviewComponent.module.css'; // Importing the CSS module
import { assets } from '../../assets/assets';

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleAddReview = (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === '') {
      alert("Please provide a rating and a comment.");
      return;
    }
    const newReview = { rating, comment, id: Date.now() }; // Add a unique ID
    setReviews([...reviews, newReview]);
    setRating(0);
    setComment('');
  };

  const stars = Array(5).fill(0); // Create an array of 5 stars

  // Function to get background color based on rating
  const getBackgroundColor = () => {
    switch (rating) {
      case 1: return '#FFCCCC'; // Red for 1 star
      case 2: return '#FFCC99'; // Orange for 2 stars
      case 3: return '#FFFF99'; // Yellow for 3 stars
      case 4: return '#CCFF99'; // Light Green for 4 stars
      case 5: return '#99FF99'; // Green for 5 stars
      default: return '#FFFFFF'; // Default white background
    }
  };

  return (
    <div className={styles.reviewContainer} style={{ backgroundColor: getBackgroundColor() }}>
      <h2>Leave a Review</h2>
      <form onSubmit={handleAddReview}>
        <div className={styles.starRating}>
          {stars.map((_, index) => (
            <img
              key={index}
              src={index < rating ? assets.filled : assets.star} // Replace with your star image paths
              alt="star"
              onClick={() => setRating(index + 1)}
              className={styles.star}
            />
          ))}
        </div>
        <div>
          <label>Comment:</label>
          <textarea
            className={styles.commentInput}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment here..."
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Submit Review</button>
      </form>

      <h3>Recent Reviews</h3>
      <ul className={styles.reviewList}>
        {reviews.map((review) => (
          <li key={review.id} className={styles.reviewItem}>
            <strong>{review.rating} Stars</strong>: {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewComponent;