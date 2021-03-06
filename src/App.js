import { Profile } from './components/Profile/Profile';
import user from './mock-data/user.json';
import { Statistics } from './components/Statistics/Statistics';
import statisticalData from '././mock-data/statistical-data.json';
import { FriendsList } from './components/FriendList/FriendList';
import friends from './mock-data/friends.json';
import { TransactionsList } from './components/Transactions/TransactionsList';
import transactions from './mock-data/transactions.json';

export default function App() {
  return (
    <>
      <Profile name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />;
      <FriendsList friends={friends} />;
      <TransactionsList items={transactions} />;
    </>
  );
}
