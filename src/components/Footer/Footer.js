import Logo from '../Logo/Logo';
import './Footer.css';
import { CATALOGUE_TEXT, PERSONAL_SEWING_TEXT, ABOUT_TEXT, DELIVERY_TEXT, CONTACTS_TEXT, TERMS_OF_USE_TEXT, OFFER_TEXT, COPYRIGHT_TEXT, PHONE, TIME_TEXT } from '../../config/texts';
import { CATALOGUE_PAGE, PERSONAL_SEWING_PAGE, ABOUT_PAGE, DELIVERY_PAGE, CONTACTS_PAGE, TERMS_OF_USE, OFFER } from '../../config/links';
import { Link } from 'react-router-dom';


function Footer(props) {

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <Logo type='light' />
        </div>
        <nav className="footer__menu">
          <ul className="footer__menu-links">
            <li className="footer__menu-item">
              <Link
                className="footer__menu-link footer__menu-link_none-decoration"
                to={CATALOGUE_PAGE}
              >
                {CATALOGUE_TEXT}
              </Link>
              </li>
            <li className="footer__menu-item">
              <Link
                className="footer__menu-link footer__menu-link_none-decoration"
                to={PERSONAL_SEWING_PAGE}
              >
                {PERSONAL_SEWING_TEXT}
              </Link>
              </li>
            <li className="footer__menu-item">
            <Link
                className="footer__menu-link footer__menu-link_none-decoration"
                to={ABOUT_PAGE}
              >
                {ABOUT_TEXT}
              </Link>
              </li>
            <li className="footer__menu-item">
            <Link
                className="footer__menu-link footer__menu-link_none-decoration"
                to={DELIVERY_PAGE}
              >
                {DELIVERY_TEXT}
              </Link>
              </li>
            <li className="footer__menu-item">
            <Link
                className="footer__menu-link footer__menu-link_none-decoration"
                to={CONTACTS_PAGE}
              >
                {CONTACTS_TEXT}
              </Link>
              </li>
            <li className="footer__menu-item">
              <Link
                className="footer__menu-link"
                to={OFFER}
              >
                {OFFER_TEXT}
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link
                className="footer__menu-link"
                to={TERMS_OF_USE}
              >
                {TERMS_OF_USE_TEXT}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footer__contacts">
          <div className="footer__contact footer__contact_type_phone">
            <p className="footer__text">{PHONE}</p>
          </div>
          <div className="footer__contact footer__contact_type_time">
            <p className="footer__text">Звонки и заказы:</p>
            <p className="footer__text">{TIME_TEXT}</p>
          </div>
          <ul className="footer__social">
            <li className="footer__social-item">
              <a className="footer__social-link footer__social-link_icon_whatsapp" href="#">
              </a>
            </li>
            <li className="footer__social-item">
              <a className="footer__social-link footer__social-link_icon_instagram" href="#">
              </a>
            </li>
            <li className="footer__social-item">
              <a className="footer__social-link footer__social-link_icon_telegram" href="#">
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__wrapper">
          <p className="footer__copyright">{COPYRIGHT_TEXT}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;