import React from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function CartItem(props) {
  const cn = bem('CartItem');

  const callbacks = {
    onButtonClick: () => {
      props.onButtonClick(props.item.code);
    },
  };

  return (
    <div className={cn()}>
      <div className={cn('code')}>{props.item.code}</div>
      <div className={cn('title')}>{props.item.title}</div>
      <div className={cn('price')}>
        {new Intl.NumberFormat('ru-RU').format(props.item.price) + ' ₽'}
      </div>
      <div className={cn('ammount')}>{props.item.ammount + ' шт'}</div>
      <div className={cn('actions')}>
        <button onClick={callbacks.onButtonClick}>Удалить</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ammount: PropTypes.number,
  }).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default React.memo(CartItem);
