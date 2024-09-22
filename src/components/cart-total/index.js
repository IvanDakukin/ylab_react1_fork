import React from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function CartTotal(props) {
  const cn = bem('CartTotal');

  return (
    <div className={cn()}>
      <div className={cn('label')}>Итого:</div>
      <div className={cn('sum')}>{new Intl.NumberFormat('ru-RU').format(props.total) + ' ₽'}</div>
    </div>
  );
}

CartTotal.propTypes = {
  total: PropTypes.number.isRequired,
};

export default React.memo(CartTotal);
