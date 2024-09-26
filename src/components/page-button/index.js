import PropTypes, { number } from 'prop-types';
import { memo } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function PageButton(props) {
  const cn = bem('PageButton');

  return (
    <button
      onClick={() => props.onClick(props.number)}
      className={cn('')}
      disabled={props.isSelected}
    >
      {props.number}
    </button>
  );
}

PageButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isCurrent: PropTypes.bool.isRequired,
};

export default memo(PageButton);
