import React from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import Item from '../item';
import './style.css';

function List({ list, onButtonClick, buttonText }) {
  const cn = bem('List');
  return (
    <div className={cn()}>
      {list.map(item => (
        <div key={item.code} className={cn('item')}>
          <Item item={item} onButtonClick={onButtonClick} buttonText={buttonText} />
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
  onButtonClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default React.memo(List);
