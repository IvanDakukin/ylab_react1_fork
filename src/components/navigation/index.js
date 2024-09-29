import { memo } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navigation({ navItems }) {
  const cn = bem('Navigation');
  console.log(navItems.map(el => el.title));
  return (
    <nav className={cn('')}>
      {navItems.map((item, index) => (
        <Link key={index} to={item.url} className={cn('item')}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

Navigation.PropTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default memo(Navigation);
