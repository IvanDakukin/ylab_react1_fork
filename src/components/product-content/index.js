import { memo } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.css';
import ProductProperty from '../product-property';
import PropTypes from 'prop-types';
import { numberFormat } from '../../utils';

function ProductContent({ product, onAdd }) {
  const cn = bem('ProductContent');
  const price = numberFormat(product.price);

  if (Object.keys(product).length == 0) return <div className={cn('')}>Загрузка...</div>;
  
  return (
    <div className={cn()}>
      <div className={cn('description')}>{product.description}</div>
      <ProductProperty propKey="Страна производитель:" value={product.madeIn.title} />
      <ProductProperty propKey="Категория:" value={product.category.title} />
      <ProductProperty propKey="Год выпуска:" value={product.edition} />
      <div className={cn('price')}>{`Цена: ${price} ₽`}</div>
      <button onClick={() => onAdd(product._id)}>Добавить</button>
    </div>
  );
}

ProductProperty.PropTypes = {
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    madeIn: PropTypes.shape({
      title: PropTypes.string.isRequired,
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    edition: PropTypes.isRequired,
    category: PropTypes.shape({
      title: PropTypes.string.isRequired,
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
  onAdd: PropTypes.func,
};

export default memo(ProductContent);
