export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <button onClick={onLeaveFeedback} name={options[0]}>
        Good
      </button>
      <button onClick={onLeaveFeedback} name={options[1]}>
        Neutral
      </button>
      <button onClick={onLeaveFeedback} name={options[2]}>
        Bad
      </button>
    </>
  );
};
