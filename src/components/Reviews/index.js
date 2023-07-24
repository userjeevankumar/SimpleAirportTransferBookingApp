import React from "react";
import "./index.css";

const Review = ({ name, content, rating }) => {
  const renderStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(
        <span key={i} className="star-icon">
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="review">
      <h3>{name}</h3>
      <div className="rating">{renderStars(rating)}</div>
      <p>{content}</p>
    </div>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Raphael B...",
      content: "Rated excellent by real customers",
      rating: 5,
    },
    {
      name: "Antonio W...",
      content: "Rated excellent by real customers",
      rating: 5,
    },
    {
      name: "Matthias P...",
      content: "Top Service",
      rating: 4,
    },
    {
      name: "Zoran N...",
      content: "Everything correct and on time.",
      rating: 4,
    },
    {
      name: "Octavia T...",
      content: "Correct and on time.",
      rating: 5,
    },
    {
      name: "John A...",
      content:
        "Everything went to plan, driver was on time and the trip was great",
      rating: 4,
    },
    {
      name: "Nicole S...",
      content: "Thank you! Everything was very good.",
      rating: 4,
    },
    {
      name: "Maria E...",
      content:
        "Thanks for the service, as it was for my mom traveling alone from airport to hotel. I do recommend a lot this service.",
      rating: 4,
    },
    {
      name: "Thanos E...",
      content: "Thanks for the recommend a lot this service.",
      rating: 5,
    },
  ];

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <div className="review-container">
        {reviews.map((review, index) => (
          <Review
            key={index}
            name={review.name}
            content={review.content}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
