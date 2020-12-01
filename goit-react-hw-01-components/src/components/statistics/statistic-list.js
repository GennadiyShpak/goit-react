import StatsItem from './statistic-item';
import s from './statistics.module.css';
import PropTypes from 'prop-types';

export default function StatisticsListMarkup({ statisticProps }) {
  return (
    <ul className={s.list}>
      {statisticProps.map(item => (
        <li key={item.id} className={s.item}>
          <StatsItem label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatisticsListMarkup.propTypes = {
  statisticProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
