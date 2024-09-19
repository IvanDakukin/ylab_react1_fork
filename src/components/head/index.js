import React from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function Head(props) {
  const cn = bem('Head');

  return (
    <div className={cn()}>
      <h1 className={cn('title')}>{props.title}</h1>
      <div className={cn('controls')}>{props.controls}</div>
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  controls: PropTypes.node,
};

export default React.memo(Head);
