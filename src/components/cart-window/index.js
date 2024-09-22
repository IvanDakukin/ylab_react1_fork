import React from 'react';
import PropTypes from 'prop-types';
import List from '../list';
import Head from '../head';
import Modal from '../modal';
import CartTotal from '../cart-total';
import CartItem from '../cart-item';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function CartWindow(props) {
  const cn = bem('CartWindow');
  const productsSum = props.cart.reduce((sum, product) => sum + product.price * product.ammount, 0);

  const callbacks = {
    createCartItem(item) {
      return <CartItem item={item} onButtonClick={props.onRemoveProduct} />;
    },
  };

  return (
    <Modal>
      <div className={cn()}>
        <div className={cn('head')}>
          <Head
            title={'Корзина'}
            controls={
              <button onClick={props.onCloseCart} className="Button-close">
                Закрыть
              </button>
            }
          />
        </div>

        {props.cart.length ? (
          <div className={cn('body')}>
            <List list={props.cart} createItem={callbacks.createCartItem} />
            <CartTotal total={productsSum}></CartTotal>
          </div>
        ) : (
          <div className={cn('body', { empty: true })}>Корзина пуста</div>
        )}
      </div>
    </Modal>
  );
}

CartWindow.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      ammount: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onRemoveProduct: PropTypes.func.isRequired,
  onCloseCart: PropTypes.func.isRequired,
};

export default React.memo(CartWindow);
