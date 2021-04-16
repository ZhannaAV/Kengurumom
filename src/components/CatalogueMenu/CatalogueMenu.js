import './CatalogueMenu.css';
import { catalogueLinks } from '../../config/links';
import { Link } from 'react-router-dom';

function CatalogueMenu() {

  return (
	
    <nav className="catalogue-menu">
		{
			catalogueLinks.map((link,i) => 
				<Link key={i} className="catalogue-menu__link" to={link[1]}>{link[0]}</Link>
			)
		}
	</nav>
  );
}

export default CatalogueMenu;