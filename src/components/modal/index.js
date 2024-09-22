import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function Modal({ children }) {
  const cn = bem('Modal');

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = null;
    };
  }, []);

  return (
    <div className={cn()}>
      <div className={cn('content')}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default React.memo(Modal);
