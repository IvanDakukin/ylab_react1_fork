import { memo, useCallback, useEffect, useMemo } from 'react';
import Item from '../../components/item';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import BasketTool from '../../components/basket-tool';
import Pagination from '../../components/pagination';
import List from '../../components/list';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import { getPaginationButtons } from '../../utils';

function Main() {
  const store = useStore();

  useEffect(() => {
    store.actions.catalog.load();
  }, []);

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
    page: state.catalog.page,
    limit: state.catalog.limit,
    count: state.catalog.count,
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    // Переключение страницы товаров
    setPage: useCallback(page => store.actions.catalog.setPage(page), [store]),
  };

  const renders = {
    item: useCallback(
      item => {
        return <Item item={item} url={`/products/${item._id}`} onAdd={callbacks.addToBasket} />;
      },
      [callbacks.addToBasket],
    ),
  };

  const pages = useMemo(
    () => getPaginationButtons(select.page, select.limit, select.count),
    [select.page, select.limit, select.count],
  );

  return (
    <PageLayout>
      <Head title="Магазин" />
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} />
      <List list={select.list} renderItem={renders.item} />
      <Pagination pages={pages} curPage={select.page} setPage={callbacks.setPage} />
    </PageLayout>
  );
}

export default memo(Main);
