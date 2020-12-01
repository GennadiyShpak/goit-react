import PropTypes from 'prop-types';
import s from './user.module.css';

export default function UserStats({ stats }) {
  return (
    <ul className={s.stats}>
      <li className={s.statsItem}>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li className={s.statsItem}>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li className={s.statsItem}>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  );
}

UserStats.propTypes = {
  stats: PropTypes.shape({
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
