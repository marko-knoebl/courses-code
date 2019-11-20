import React from 'react';

const FULL_STAR = '★';
const EMPTY_STAR = '☆';

function Rating({stars}) {
  const starSpans = [];
  for (let i = 1; i <= 5; i++) {
    starSpans.push(<span key={i}>{i <= stars ? FULL_STAR : EMPTY_STAR}</span>);
  }
  return <div>{starSpans}</div>;
}

function RatingWithMap({stars, onStarsChange}) {
  const starIds = [0, 1, 2, 3, 4, 5];
  if (!starIds.includes(stars - 1)) {
    throw new Error('number of stars must be 1-6');
  }
  const starSpans = starIds.map(i => (
    <span
      key={i}
      onClick={() => {
        if (onStarsChange) {
          onStarsChange(i + 1);
        }
      }}>
      {i + 1 <= stars ? FULL_STAR : EMPTY_STAR}
    </span>
  ));
  return <div>{starSpans}</div>;
}

export default RatingWithMap;
