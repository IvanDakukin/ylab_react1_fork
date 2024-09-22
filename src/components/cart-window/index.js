import React from 'react';
import PropTypes from 'prop-types';
import Head from '../head';
import Modal from '../modal';
import CartItem from '../cart-item';
import { cn as bem } from '@bem-react/classname';
import './style.css';
import CartBody from '../cart-body';

function CartWindow(props) {
  const cn = bem('CartWindow');
  const productsSum = props.cart.reduce((sum, product) => sum + product.price * product.ammount, 0);

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
        <CartBody
          productsSum={productsSum}
          onRemoveProduct={props.onRemoveProduct}
          cart={props.cart}
        />
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
