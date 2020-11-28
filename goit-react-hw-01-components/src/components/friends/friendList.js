import FriendListRender from "./friendItem";

export default function FriendListMarckup({ friend }) {
  return (
    <ul>
      {friend.map((friend) => (
        <li key={friend.id} className="item">
          <FriendListRender
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
