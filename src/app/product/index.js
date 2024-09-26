import { memo, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import BasketTool from '../../components/basket-tool';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import ProductContent from '../../components/product-content';

function Product() {
  const store = useStore();
  const { id } = useParams();

  useEffect(() => {
    store.actions.product.load(id);
    store.actions.modals.close();
    return (() => {
      store.actions.product.clear();
    })
  }, [id]);

  const select = useSelector(state => ({
    product: state.product.product,
    amount: state.basket.amount,
    sum: state.basket.sum,
    activeModal: state.modals.name,
  }));

  const callbacks = {
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
	addProduct: useCallback((_id) => store.actions.basket.addToBasket(_id)),
  };

  return (
    <PageLayout>
      <Head title={select.product.title} />
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} />
      <ProductContent product={select.product} onAdd={callbacks.addProduct}/>
    </PageLayout>
  );
}

export default memo(Product);
