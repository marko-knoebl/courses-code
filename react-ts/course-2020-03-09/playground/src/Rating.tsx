import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

type Props = {
  stars: number;
  onStarsChange?: (newStars: number) => void;
};

function Rating(props: Props) {
  const themeContext = useContext(ThemeContext);

  if (props.stars < 1) {
    throw new Error("number of stars must be 1-5");
  }

  const starElements = [];

  for (let i = 0; i <= 4; i++) {
    const isActive = i + 1 <= props.stars;
    let starSymbol;
    if (themeContext === "default") {
      starSymbol = isActive ? "★" : "☆";
    } else {
      starSymbol = isActive ? "😀" : "😡";
    }
    const starStyle = { color: isActive ? "gold" : "lightgrey" };
    const clickHandler = () => {
      // trigger onStarsChange (if it is defined)
      if (props.onStarsChange !== undefined) {
        props.onStarsChange(i + 1);
      }
    };
    starElements.push(
      <span key={i} style={starStyle} onClick={clickHandler}>
        {starSymbol}
      </span>
    );
  }

  return <div>{starElements}</div>;
}

export default Rating;
