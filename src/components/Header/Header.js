import Basket from '../Basket/Basket';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <header className="header">
		<div className="header__content">
			<Logo />
			<Navigation />
			<p className="header__text">+1 234 567 89 01</p>
			<Basket />
		</div>
	</header>
  );
}

export default Header;