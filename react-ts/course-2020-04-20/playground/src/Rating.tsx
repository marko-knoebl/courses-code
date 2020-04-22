import React, { FC } from "react";
import styled from "styled-components";

type StarProps = {
  active: boolean;
};

const Star = styled.span`
  color: ${(props: StarProps) => (props.active ? "gold" : "lightgrey")};
`;

const RatingContainer = styled.div`
  border: 4px solid black;
`;

type RatingProps = {
  stars: number;
  onStarsChange: (newRating: number) => void;
};

const Rating: FC<RatingProps> = (props) => {
  const starElements = [];
  for (let i = 1; i <= props.stars; i++) {
    starElements.push(
      <Star
        active={true}
        onClick={() => {
          props.onStarsChange(i);
        }}
      >
        ★
      </Star>
    );
  }
  for (let i = props.stars + 1; i <= 5; i++) {
    starElements.push(
      <Star
        active={false}
        onClick={() => {
          props.onStarsChange(i);
        }}
      >
        ☆
      </Star>
    );
  }
  return <RatingContainer>{starElements}</RatingContainer>;
}

export default Rating;
