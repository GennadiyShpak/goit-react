import s from './Controls.module.css';
function Controls({ onGood, onBad, onNeutral }) {
  return (
    <div className={s.feedbackControl}>
      <button type="button" onClick={onGood}>
        Good
      </button>
      <button type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onBad}>
        Bad
      </button>
    </div>
  );
}

export default Controls;
