import { memo } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.css';
import PropTypes from 'prop-types';

function ProductProperty(props) {
  const cn = bem('ProductProperty');
  return (
    <div className={cn()}>
      <span className={cn('propKey')}>{props.propKey + ' '}</span>
      <span className={cn('value')}>{props.value}</span>
    </div>
  );
}

ProductProperty.PropTypes = {
  propKey: PropTypes.string.isRequired,
  value: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
};

export default memo(ProductProperty);
