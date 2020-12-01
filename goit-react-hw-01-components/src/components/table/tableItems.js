import PropTypes from 'prop-types';
import s from './tableStyle.module.css';

export default function TableItemsHandler({ type, amount, currency }) {
  return (
    <tr>
      <td className={s.rowCell}>{type}</td>
      <td className={s.rowCell}>{amount}</td>
      <td className={s.rowCell}>{currency}</td>
    </tr>
  );
}

TableItemsHandler.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
