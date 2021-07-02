import { Link } from "react-router-dom";
import {
  PERSONAL_SEWING_PAGE,
  CATALOGUE_PAGE,
  ABOUT_PAGE,
  DELIVERY_PAGE,
  CONTACTS_PAGE,
  OFFER_PAGE,
  TERMS_OF_USE_PAGE
} from "../../config/links";
import {
  PERSONAL_SEWING_TEXT,
  CATALOGUE_TEXT,
  ABOUT_TEXT,
  DELIVERY_TEXT,
  CONTACTS_TEXT,
  PHONE,
  OFFER_TEXT,
  TERMS_OF_USE_TEXT
} from "../../config/texts";
import cn from "classnames";
import "./Navigation.css";

function Navigation({ media, type, openCatalogueMenu, closeCatalogueMenu }) {
  return (
    <nav
      className={cn(
        { navigation: type !== "footer" },
        { navigation_type_side: type === "side" },
        { navigation_type_footer: type === "footer" }
      )}
    >
      {(!media.isMobileHor || type === "side" || type === "footer") && (
        <Link
        className={cn(
          { navigation__link: type !== "footer" },
          { "navigation__link_type_footer": type === "footer" }
        )}
          //className="navigation__link"
          to={CATALOGUE_PAGE}
          onMouseOver={type !== "side" && openCatalogueMenu}
        >
          {CATALOGUE_TEXT}
        </Link>
      )}
      {(media.isDesktop || type === "side" || type === "footer") && (
        <Link
          onMouseOver={type !== "side" && closeCatalogueMenu}
          className={cn(
            { navigation__link: type !== "footer" },
            { "navigation__link_type_footer": type === "footer" }
          )}
            //className="navigation__link"
          to={PERSONAL_SEWING_PAGE}
        >
          {PERSONAL_SEWING_TEXT}
        </Link>
      )}
      {(media.isDesktop || type === "side" || type === "footer") && (
        <Link
          onMouseOver={type !== "side" && closeCatalogueMenu}
          className={cn(
            { navigation__link: type !== "footer" },
            { "navigation__link_type_footer": type === "footer" }
          )}
            //className="navigation__link"
          to={ABOUT_PAGE}
        >
          {ABOUT_TEXT}
        </Link>
      )}
      {(!media.isTabletVert || type === "side" || type === "footer") && (
        <Link
          onMouseOver={type !== "side" && closeCatalogueMenu}
          className={cn(
            { navigation__link: type !== "footer" },
            { "navigation__link_type_footer": type === "footer" }
          )}
            //className="navigation__link"
          to={DELIVERY_PAGE}
        >
          {DELIVERY_TEXT}
        </Link>
      )}
      {(type === "side" || type === "footer") && (
        <Link 
        className={cn(
          { navigation__link: type !== "footer" },
          { "navigation__link_type_footer": type === "footer" }
        )}
          //className="navigation__link"
        to={CONTACTS_PAGE}>
          {CONTACTS_TEXT}
        </Link>
      )}
      {(type !== "footer" && (!media.isMobileVert || type === "side")) && (
        <Link
          onMouseOver={type !== "side" && closeCatalogueMenu}
          className="navigation__link"
          to={CONTACTS_PAGE}
        >
          {PHONE}
        </Link>
      )}
      {type === "footer" && (
<<<<<<< HEAD
        <Link className="navigation__link_type_footer navigation__link_underlined" to={OFFER_PAGE}>
=======
        <Link className="navigation__link_type_footer navigation__link_underlined" to={OFFER_PAGE} target="_blank" rel="noopener noreferrer">
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
          {OFFER_TEXT}
        </Link>
      )}
      {type === "footer" && (
<<<<<<< HEAD
        <Link className="navigation__link_type_footer navigation__link_underlined" to={TERMS_OF_USE_PAGE}>
=======
        <Link className="navigation__link_type_footer navigation__link_underlined" to={TERMS_OF_USE_PAGE} target="_blank" rel="noopener noreferrer">
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
          {TERMS_OF_USE_TEXT}
        </Link>
      )}
    </nav>
  );
}

export default Navigation;
