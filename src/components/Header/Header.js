import { useState } from 'react';
import Basket from '../Basket/Basket';
import CatalogueMenu from '../CatalogueMenu/CatalogueMenu';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {

	const [isCatMenuOpnd, setIsCatMenuOpnd] = useState(false);
	const showCatalogue = _ => setIsCatMenuOpnd(true);
	const hideCatalogue = _ => setIsCatMenuOpnd(false);

	return (
		<header className="header">
			<div className="header__content">
				<Logo />
				<Navigation onMouseOver={showCatalogue} onMouseOut={hideCatalogue} />
				{
					isCatMenuOpnd && <CatalogueMenu />
				}
				{/* <p className="header__text">+1 234 567 89 01</p> */}
				<Basket />
			</div>
		</header>
	);
}

export default Header;