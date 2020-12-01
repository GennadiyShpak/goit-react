import FriendListRender from './friendItem';
import s from './friends.module.css';

export default function FriendListMarckup({ friend }) {
  return (
    <ul className={s.container}>
      {friend.map(friend => (
        <FriendListRender
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
        />
      ))}
    </ul>
  );
}
