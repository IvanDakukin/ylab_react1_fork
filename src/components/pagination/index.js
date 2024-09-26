import { memo, useMemo } from 'react';
import { cn as bem } from '@bem-react/classname';
import PageButton from '../page-button';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import { getPaginationButtons } from '../../utils';
import './style.css';

function Pagination() {
  const store = useStore();
  const cn = bem('Pagination');

  const { curPage, limit, count } = useSelector(state => ({
    curPage: state.catalog.page,
    limit: state.catalog.limit,
    count: state.catalog.count,
  }));

  const callbacks = {
    onClick: page => store.actions.catalog.setPage(page),
  };

  const pages = useMemo(() => getPaginationButtons(curPage, limit, count), [curPage, limit, count]);

  return (
    <div className={cn()}>
      {pages.map(pageNumber =>
        pageNumber ? (
          <PageButton
            number={pageNumber}
            isSelected={pageNumber == curPage}
            onClick={callbacks.onClick}
          />
        ) : (
          <span className={cn('divider')}>...</span>
        ),
      )}
    </div>
  );
}

export default memo(Pagination);
