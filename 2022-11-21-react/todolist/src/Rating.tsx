interface RatingProps {
  value: number;
  onChange: (newValue: number) => void;
}

export default function Rating(props: RatingProps) {
  const starIds = [1, 2, 3, 4, 5];
  return (
    <div>
      {starIds.map((id) => (
        <span key={id} onClick={() => props.onChange(id)}>
          {id <= props.value ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
