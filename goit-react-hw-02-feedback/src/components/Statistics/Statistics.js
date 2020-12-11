import Section from '../Section';
import s from './Statistics.module.css';
import Notification from '../Notification';

function Statistics({ good, bad, neutral, total, precent }) {
  console.log(typeof good);
  return (
    <Section title="Statistics">
      {total === 0 && <Notification message="No feedback given" />}
      {total > 0 && (
        <ul>
          <li className={s.item}>
            <p>Good:</p>
            <p>{good}</p>
          </li>
          <li className={s.item}>
            <p>Neutral:</p>
            <p>{neutral}</p>
          </li>
          <li className={s.item}>
            <p>Bad:</p>
            <p>{bad}</p>
          </li>
          <li className={s.item}>
            <p>Total:</p>
            <p>{total}</p>
          </li>
          <li className={s.item}>
            <p>Precent:</p>
            <p>{precent}</p>
          </li>
        </ul>
      )}
    </Section>
  );
}
export default Statistics;
