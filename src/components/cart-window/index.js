import React from 'react';
import PropTypes from 'prop-types';
import List from '../list';
import Head from '../head';
import Modal from '../modal';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function CartWindow({ cart, onRemoveProduct, onCloseCart }) {
  const cn = bem('CartWindow');
  const productsSum = cart.reduce((sum, product) => sum + product.price * product.ammount, 0);

  return (
    <Modal>
      <div className={cn()}>
        <div className={cn('head')}>
          <Head
            title={'Корзина'}
            controls={
              <button onClick={onCloseCart} className="Button-close">
                Закрыть
              </button>
            }
          />
        </div>
        <div className={cn('body')}>
          <List list={cart} onButtonClick={onRemoveProduct} buttonText="Удалить" />
        </div>
        <div className={cn('footer')}>
          <div className={cn('label')}>Итого:</div>
          <div className={cn('sum')}>
            {new Intl.NumberFormat('ru-RU').format(productsSum) + ' ₽'}
          </div>
        </div>
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
