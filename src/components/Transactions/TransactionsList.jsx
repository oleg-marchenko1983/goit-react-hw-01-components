import PropTypes, { arrayOf } from 'prop-types';
import { Transaction } from './Transaction';
import css from './Transactions.module.css';

export const TransactionsList = ({ items }) => {
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
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <Transaction type={type} amount={amount} currency={currency} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionsList.propTypes = {
  transactions: arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
