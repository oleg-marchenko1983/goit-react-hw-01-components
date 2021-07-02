import Profile from './components/Profile/Profile';
import user from './mock-data/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from '././mock-data/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './mock-data/friends.json';
import Transactions from './components/Transactions/Transactions';
import transactions from './mock-data/transactions.json';

export default function App() {
  return (
    <>
      <Profile name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />;
      <FriendList friends={friends} />,
      <Transactions items={transactions} />;
    </>
  );
}
