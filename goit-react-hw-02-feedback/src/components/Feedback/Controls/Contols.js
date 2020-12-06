import s from './Controls.module.css';
function Controls({ onLeaveFeedback }) {
  return (
    <div className={s.feedbackControl}>
      <button type="button" onClick={onLeaveFeedback} name="good">
        Good
      </button>
      <button type="button" onClick={onLeaveFeedback} name="neutral">
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedback} name="bad">
        Bad
      </button>
    </div>
  );
}

export default Controls;
