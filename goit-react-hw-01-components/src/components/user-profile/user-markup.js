import UserInfo from './user-info';
import UserStats from './user-stats';
import s from './user.module.css';

export default function UserProfileMarckup({ userProps }) {
  return (
    <div className={s.container}>
      <UserInfo
        avatar={userProps.avatar}
        name={userProps.name}
        tag={userProps.tag}
        location={userProps.location}
      />
      <UserStats stats={userProps.stats} />
    </div>
  );
}
