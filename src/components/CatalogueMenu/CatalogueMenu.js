import './CatalogueMenu.css';
import { catalogueLinks } from '../../config/links';
import { Link } from 'react-router-dom';
import cn from 'classnames';

function CatalogueMenu({ isCatMenuOpnd }) {

  return (
	
    <div className="catalogue-menu">
		<nav className={cn( "catalogue-menu__container", 
							{ "catalogue-menu__container_visible": isCatMenuOpnd } )}
		>
			{
				catalogueLinks.map((link,i) =>
					<Link 
						key={i} 
						className="catalogue-menu__link"
						to={link[1]}
					>
						{link[0]}
					</Link>
				)
			}
		</nav>
	</div>
  );
}

export default CatalogueMenu;