import Navigation from '../Navigation/Navigation';
import cn from 'classnames'; 
import './SideMenu.css';
import Logo from '../Logo/Logo';

function SideMenu({ 
    media, onCloseClick, isOpened 
}) {

	return (

		<div className={cn("side-menu", {"side-menu_invisible": !isOpened} )} >

            <div className={cn("side-menu__overlay", { "side-menu__overlay_invisible": !isOpened} )} onClick={onCloseClick} ></div>
			<div className={cn("side-menu__container", { "side-menu__container_opened": isOpened } )}>
                <div className="side-menu__top">
                    {
                        media.isMobileHor
                        &&  <Logo type='light' />
                    }    
                    <button type="button" className="side-menu__close-button" onClick={onCloseClick}></button>
                </div>
                
				<Navigation
					media={media}
                    type='side'
				/>
			</div>
		</div>
	);
}

export default SideMenu;