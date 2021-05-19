type ProgressBarProps = {
  value: number;
  color?: string;
};

function ProgressBar(props: ProgressBarProps) {
  const percentageWidth = props.value * 100;

  return (
    <div style={{ height: 24, backgroundColor: "lightgrey" }}>
      <div
        style={{
          height: "100%",
          width: `${percentageWidth}%`,
          backgroundColor: props.color ? props.color : "red"
        }}
      >
        progress
      </div>
    </div>
  );
}

export default ProgressBar;
