import { memo } from 'react';
import { cn as bem } from '@bem-react/classname';
import PageButton from '../page-button';
import PropTypes from 'prop-types';
import './style.css';

function Pagination(props) {
  const cn = bem('Pagination');

  const callbacks = {
    onClick: page => props.setPage(page),
  };

  return (
    <div className={cn()}>
      {props.pages.map((pageNumber, index) =>
        pageNumber ? (
          <PageButton
            key={index}
            number={pageNumber}
            isSelected={pageNumber == props.curPage}
            onClick={callbacks.onClick}
          />
        ) : (
          <span key={index} className={cn('divider')}>
            ...
          </span>
        ),
      )}
    </div>
  );
}

Pagination.PropTypes = {
  setPage: PropTypes.func.isRequired,
  curPage: PropTypes.number.isRequired,
  pages: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default memo(Pagination);
