import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import Container from '../Container/Container';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <Container>
      <ul className={s.friendList}>
        {friends.map(({ id, name, avatar, isOnline }) => (
          <FriendListItem
            id={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
