import PropTypes from 'prop-types';
import Container from '../Container/Container';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <table className={s.table}>
        <thead>
          <tr className={s.head}>
            <th className={s.cell}>Type</th>
            <th className={s.cell}>Amount</th>
            <th className={s.cell}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ type, amount, currency, id }) => {
            return (
              <tr key={id} className={s.row}>
                <td className={s.cell}>{type}</td>
                <td className={s.cell}>{amount}</td>
                <td className={s.cell}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
