type RatingProps = {
  value: number;
  onChange?: (value: number) => void;
};

const Rating = (props: RatingProps) => {
  const starIds = [1, 2, 3, 4, 5];
  return (
    <div>
      {starIds.map((id) => (
        <span
          onClick={() => {
            // call .onChange if it exists
            props.onChange?.(id);
          }}
          key={id}
        >
          {id <= props.value ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default Rating;
