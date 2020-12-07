import Section from '../Section';
import s from './Controls.module.css';

function Controls({ onLeaveFeedback, options }) {
  return (
    <Section className={s.feedbackControl} title="Please leave feedback">
      {options.map(item => (
        <button key={item} type="button" onClick={onLeaveFeedback} name={item}>
          {item}
        </button>
      ))}
    </Section>
  );
}

export default Controls;
