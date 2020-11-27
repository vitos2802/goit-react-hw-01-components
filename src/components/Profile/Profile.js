import Description from '../Description/Description.js';
import Container from '../Container/Container';
import Stats from '../Stats/Stats.js';
import user from '../../user.json';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <Container>
      <div className={s.profile}>
        <Description user={user} />
        <Stats stats={user.stats} />
      </div>
    </Container>
  );
};

export default Profile;
