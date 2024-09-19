import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { plural } from '../../utils';
import { cn as bem } from '@bem-react/classname';

function CartSummary({ cart, onOpenCart }) {
  const cn = bem('CartSummary');

  const productsSum = cart.reduce((sum, product) => sum + product.price * product.ammount, 0);
  return (
    <div className={cn()}>
      <div className={cn('text')}>В корзине:</div>
      <div className={cn('amount')}>
        {cart.length
          ? `${cart.length} ${plural(cart.length, {
              one: 'товар',
              few: 'товара',
              many: 'товаров',
            })} / ${new Intl.NumberFormat('ru-RU').format(productsSum)} ₽`
          : 'пусто'}
      </div>
      <button className={cn('button')} onClick={onOpenCart}>
        Перейти
      </button>
    </div>
  );
}

CartSummary.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      ammount: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onOpenCart: PropTypes.func.isRequired,
};

export default React.memo(CartSummary);
