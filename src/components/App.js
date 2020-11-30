import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import statistic from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const App = () => {
  return (
    <>
      <Profile />
      <Statistics title="Upload stats" stats={statistic} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
