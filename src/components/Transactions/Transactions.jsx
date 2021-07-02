import PropTypes, { arrayOf } from 'prop-types';
import css from './Transactions.module.css';

function Transaction({ type, amount, currency }) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}

export default function Transactions({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <Transaction type={type} amount={amount} currency={currency} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

Transactions.propTypes = {
  transactions: arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
