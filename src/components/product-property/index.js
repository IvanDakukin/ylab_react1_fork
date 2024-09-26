import { memo } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function ProductProperty(props) {
  const cn = bem('ProductProperty');
  return (
    <div className={cn()}>
      <span className={cn('propKey')}>{props.propKey + ' '}</span>
      <span className={cn('value')}>{props.value}</span>
    </div>
  );
}

export default memo(ProductProperty);
