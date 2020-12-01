import FriendListMarckup from './components/friends/friendList';
import friendList from './components/friends/friendList.json';
import user from './components/user-profile/user.json';
import UserProfileMarckup from './components/user-profile/user-markup';
import TransactionsMarkup from './components/table/tableTransactionsList';
import items from './components/table/transactions.json';
import StatisticsListMarkup from './components/statistics/statistic-list';
import stat from './components/statistics/statistical-data.json';
import Section from './components/statistics/Section';

import './index.css';

export default function App() {
  return (
    <div>
      <Section title="UPLOAD STATS" className="wrapper">
        <StatisticsListMarkup statisticProps={stat} />
      </Section>
      <Section className="wrapper">
        <FriendListMarckup friend={friendList} />
      </Section>
      <Section className="wrapper">
        <UserProfileMarckup userProps={user} />
      </Section>
      <Section className="wrapper">
        <TransactionsMarkup tramsactionProps={items} />
      </Section>
    </div>
  );
}
