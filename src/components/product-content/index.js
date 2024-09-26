import { memo } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.css';
import ProductProperty from '../product-property';
import { numberFormat } from '../../utils';

function ProductContent(props) {
  const cn = bem('ProductContent');
  const price = numberFormat(props.product.price);
  if (Object.keys(props.product).length == 0) return <div>Загрузка...</div>;
  return (
    <div className={cn()}>
	 <div className={cn("description")}>{props.product.description}</div>
      <ProductProperty propKey="Страна производитель:" value={props.product.madeIn.title} />
      <ProductProperty propKey="Категория:" value={props.product.category.title} />
      <ProductProperty propKey="Год выпуска:" value={props.product.edition} />
      <div className={cn('price')}>{`Цена: ${price} ₽`}</div>
      <button onClick={() => props.onAdd(props.product._id)}>Добавить</button>
    </div>
  );
}

export default memo(ProductContent);
