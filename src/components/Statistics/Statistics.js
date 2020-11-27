import PropTypes from 'prop-types';
import Container from '../Container/Container';
import s from './Statistics.module.css';

const randomColor = () => {
  const value = () => Math.round(Math.random() * 255);
  return `rgb(${value()}, ${value()}, ${value()})`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      <Container>
        <ul className={s.list}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                key={id}
                className={s.item}
                style={{ backgroundColor: randomColor() }}
              >
                <span>{label}</span>
                <span>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
