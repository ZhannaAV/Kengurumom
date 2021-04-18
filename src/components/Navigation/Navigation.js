import { Link } from 'react-router-dom';
import { 
    PERSONAL_SEWING_PAGE, CATALOGUE_PAGE, ABOUT_PAGE, DELIVERY_PAGE, CONTACTS_PAGE 
} from '../../config/links';
import { 
    PERSONAL_SEWING_TEXT, CATALOGUE_TEXT, ABOUT_TEXT, DELIVERY_TEXT, CONTACTS_TEXT, PHONE 
} from '../../config/texts';
import cn from 'classnames';
import './Navigation.css';

function Navigation({ 
    media, type, openCatalogueMenu, closeCatalogueMenu 
}) {
  return (
        
        <nav className={cn("navigation", { "navigation_type_side": type === 'side' } )}>
            {
                (!media.isMobileHor || type === 'side')
                && <Link 
                        className="navigation__link" 
                        to={CATALOGUE_PAGE}
                        onMouseOver={type !== 'side' && openCatalogueMenu}
                    >
                        {CATALOGUE_TEXT}
                    </Link>
            }
            {
                (media.isDesktop || type === 'side')
                &&  <Link 
                        onMouseOver={type !== 'side' && closeCatalogueMenu}
                        className="navigation__link"
                        to={PERSONAL_SEWING_PAGE}
                    >
                        {PERSONAL_SEWING_TEXT}
                    </Link>
            }
            {
                (media.isDesktop || type === 'side') 
                && <Link 
                        onMouseOver={type !== 'side' && closeCatalogueMenu}
                        className="navigation__link" 
                        to={ABOUT_PAGE}
                    >
                        {ABOUT_TEXT}
                    </Link>
            }
            {
                (!media.isTabletVert || type === 'side')
                 && <Link 
                        onMouseOver={type !== 'side' && closeCatalogueMenu}
                        className="navigation__link"
                        to={DELIVERY_PAGE}
                    >
                        {DELIVERY_TEXT}
                    </Link>
            }
                        {
                (type === 'side')
                 && <Link 
                        className="navigation__link"
                        to={CONTACTS_PAGE}
                    >
                        {CONTACTS_TEXT}
                    </Link>
            }
            {
                (!media.isMobileVert || type === 'side')
                &&  <Link 
                        onMouseOver={type !== 'side' && closeCatalogueMenu} 
                        className="navigation__link" 
                        to={CONTACTS_PAGE}
                    >
                        {PHONE}
                    </Link>
            }
        </nav>
  );
}

export default Navigation;