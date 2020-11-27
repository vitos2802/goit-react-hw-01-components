import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import statistic from '../statistical-data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

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
