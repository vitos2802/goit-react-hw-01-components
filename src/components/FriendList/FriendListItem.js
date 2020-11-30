import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li key={id} className={s.friendItem}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img src={avatar} alt={name} width="48" className={s.avatar} />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
