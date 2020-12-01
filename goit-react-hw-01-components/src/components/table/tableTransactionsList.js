import PropTypes from 'prop-types';
import TableItemsHandler from './tableItems';
import s from './tableStyle.module.css';

export default function TransactionsMarkup({ tramsactionProps }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.head}>Type</th>
          <th className={s.head}>Amount</th>
          <th className={s.head}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {tramsactionProps.map(item => (
          <TableItemsHandler
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionsMarkup.propTypes = {
  tramsactionProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
