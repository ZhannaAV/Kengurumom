import { Link } from 'react-router-dom';
import cn from 'classnames';
import './Logo.css';
import { MAIN_PAGE } from '../../config/links';

function Logo({ type }) {
  return (
    <Link className={cn('logo', { logo_type_light: type === 'light' })} to={MAIN_PAGE}></Link>
  );
}

export default Logo;
