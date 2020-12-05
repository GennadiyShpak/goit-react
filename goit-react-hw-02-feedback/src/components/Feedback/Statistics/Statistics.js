import s from './Statistics.module.css';

function Statistics({ good, bad, neutral, total, precent }) {
  return (
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
  );
}
export default Statistics;
