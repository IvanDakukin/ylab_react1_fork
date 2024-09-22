import React from 'react';
import PropTypes from 'prop-types';
import List from '../list';
import CartTotal from '../cart-total';
import CartItem from '../cart-item';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function CartBody(props) {
  const cn = bem('CartBody');

  const callbacks = {
    createCartItem(item) {
      return <CartItem item={item} onButtonClick={props.onRemoveProduct} />;
    },
  };

  return (
    <>
      {props.cart.length ? (
        <div className={cn()}>
          <List list={props.cart} createItem={callbacks.createCartItem} />
          <CartTotal total={props.productsSum}></CartTotal>
        </div>
      ) : (
        <div className={cn('', { empty: true })}>Корзина пуста</div>
      )}
    </>
  );
}

CartBody.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      ammount: PropTypes.number.isRequired,
    }),
  ).isRequired,
  productsSum: PropTypes.number.isRequired,
  onRemoveProduct: PropTypes.func.isRequired,
};

export default React.memo(CartBody);
