
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div
    style={{
      paddingBottom: '20px',
    }}>
    {options.map((option) => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);
