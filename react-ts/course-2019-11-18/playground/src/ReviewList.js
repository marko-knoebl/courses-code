import React, {useState} from 'react';
import Rating from './Rating';

const INITIAL_REVIEWS = [
  {
    id: 1,
    text: 'excellent!',
    rating: 5,
  },
  {
    id: 2,
    text: '...',
    rating: 3,
  },
];

function ReviewList() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);

  const average =
    reviews.reduce((aggregator, review) => aggregator + review.rating, 0) /
    reviews.length;
  const averageRounded = Math.round(average);

  function changeRating(reviewId, newRating) {
    setReviews(
      reviews.map(review =>
        review.id === reviewId ? {...review, rating: newRating} : review,
      ),
    );
  }

  return (
    <div>
      <div>
        {reviews.map(review => (
          <Rating
            stars={review.rating}
            onStarsChange={newStars => {
              changeRating(review.id, newStars);
            }}
            key={review.id}
          />
        ))}
      </div>
      <div>
        average: <Rating stars={averageRounded} />
      </div>
    </div>
  );
}

export default ReviewList;
