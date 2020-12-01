import PropTypes from 'prop-types';
import s from './friends.module.css';

function FriendListRender({ status, avatar, name }) {
  const statusType = status ? s.online : s.offline;
  return (
    <div className={s.wrapper}>
      <span className={statusType}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}

FriendListRender.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf([true, false]).isRequired,
};

export default FriendListRender;
