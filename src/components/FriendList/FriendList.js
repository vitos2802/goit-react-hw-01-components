import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import Container from '../Container/Container';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <Container>
      <ul className={s.friendList}>
        {friends.map(({ id, name, avatar, isOnline }) => (
          <li key={id} className={s.friendItem}>
            <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
