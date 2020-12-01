import PropTypes from 'prop-types';
import s from './user.module.css';

function UserInfo({ avatar, name, tag, location }) {
  return (
    <div className={s.description}>
      <img src={avatar} alt={name} className={s.avatar} width={200} />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  );
}

UserInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
export default UserInfo;
