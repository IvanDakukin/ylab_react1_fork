import React, { useCallback } from 'react';
import List from './components/list';
import CartSummary from './components/cart-summary';
import Head from './components/head';
import PageLayout from './components/page-layout';
import CartWindow from './components/cart-window';
import ListItem from './components/list-item';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const { list, cart, isCartOpen } = store.getState();

  const callbacks = {
    onRemoveProduct: useCallback(
      code => {
        store.removeProduct(code);
      },
      [store],
    ),

    onAddProduct: useCallback(
      code => {
        store.addProduct(code);
      },
      [store],
    ),

    onOpenCart: useCallback(() => {
      store.setCartVisibility(true);
    }, [store]),

    onCloseCart: useCallback(() => {
      store.setCartVisibility(false);
    }, [store]),

    createListItem: item => {
      return <ListItem item={item} onButtonClick={callbacks.onAddProduct}></ListItem>;
    },
  };

  return (
    <PageLayout>
      <Head title="Магазин" />
      {isCartOpen && (
        <CartWindow
          cart={cart}
          onRemoveProduct={callbacks.onRemoveProduct}
          onCloseCart={callbacks.onCloseCart}
        />
      )}
      <CartSummary cart={cart} onOpenCart={callbacks.onOpenCart} />
      <List list={list} createItem={callbacks.createListItem} />
    </PageLayout>
  );
}

export default App;
