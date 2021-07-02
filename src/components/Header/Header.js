import { useState } from 'react';
import Basket from '../Basket/Basket';
import CatalogueMenu from '../CatalogueMenu/CatalogueMenu';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import useScrollPosition from './useScrollPosition';
import './Header.css';

<<<<<<< HEAD
function Header({ media, openSideMenu, cartItems }) {

=======
function Header({ media, openSideMenu, cartItems, onDeleteCartItem }) {
	const [isVisible, setIsBeVisible] = useState(false);
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
	const [isCatMenuOpnd, setIsCatMenuOpnd] = useState(false);


	const showCatalogue = _ => {
		setIsCatMenuOpnd(true);
		document.addEventListener('click', hideCatalogue);
	};	
	
	const hideCatalogue = _ => { 
		setIsCatMenuOpnd(false);
		document.removeEventListener('click', hideCatalogue);
	};

	useScrollPosition(
    ({ previousPos, currentPos }) => {
      const _isVisible = currentPos.y < previousPos.y;
      if (_isVisible !== isVisible) setIsBeVisible(_isVisible);
    },
    [isVisible]
  );

	return (
		<>
		<div className="header-dummy"></div>
		<header className={`header ${isVisible ? 'header_sticky_hide' : ''}`}>
			<div className="header__content">
				<Logo />
				<Navigation
					media={media}
					openCatalogueMenu={showCatalogue}
					closeCatalogueMenu={hideCatalogue}
				/>
				{
					media.isDesktop 
						&& <CatalogueMenu 
							isCatMenuOpnd={isCatMenuOpnd}
						/>
				}
<<<<<<< HEAD
				<Basket cartItems={cartItems}/>
=======
				<Basket onDeleteCartItem={onDeleteCartItem} cartItems={cartItems}/>
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
				{
					media.isLaptop 
						&& 	<button 
								type="button" 
								className="header__burger-button" 
								onClick={openSideMenu}
							>
							</button>
				}

			</div>
		</header>
		</>
	);
}

export default Header;