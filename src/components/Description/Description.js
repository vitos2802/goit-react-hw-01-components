import PropTypes from 'prop-types';
import s from './Description.module.css';

const Description = ({ user }) => {
  const { avatar, name, tag, location } = user;
  return (
    <div className={s.description}>
      <img src={avatar} alt="user avatar" className={s.avatar} />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  );
};

Description.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};

export default Description;
