import FriendListMarckup from "./components/friendList";
import friendList from "./friendList.json";

export default function App() {
  return (
    <div>
      <FriendListMarckup friend={friendList} />
    </div>
  );
}
