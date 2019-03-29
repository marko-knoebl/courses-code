import React from 'react';
import './Rating.css';
import {range} from 'lodash'

const Rating = React.memo(props => {
  /**
   * props:
   *   stars: number
   * event:
   *   onStarsChange: (newStars: number) => undefined
   */
  const starIndexes = range(1, 6);

  return starIndexes.map(index => (
    <span
      className={index <= props.stars ? 'star-active' : 'star-inactive'}
      onClick={() => {
        props.onStarsChange(index);
      }}
      key={index}
    >
      {index <= props.stars ? '★' : '☆'}
    </span>
  ));
});

export default Rating;
