import { Link } from 'react-router-dom';
import cn from 'classnames';
import './Logo.css';

function Logo({ type }) {
  return (
    <Link className={cn("logo", {"logo_type_light": type === 'light'} )} to="/"></Link>
  );
}

export default Logo;