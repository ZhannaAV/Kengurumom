import Logo from '../Logo/Logo';
import './Footer.css';
import { PHONE } from '../../config/texts';
import Navigation from '../Navigation/Navigation';

function Footer({ media }) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <Logo type="light" />
        </div>
        <Navigation type="footer" media={media} />
        <div className="footer__contacts">
          <div className="footer__contact footer__contact_type_phone">
            <p className="footer__text">{PHONE}</p>
          </div>
          <div className="footer__contact footer__contact_type_time">
            <p className="footer__text">Звонки и заказы:</p>
            <p className="footer__text">пн - пт 09:00 - 21:00 по МСК</p>
          </div>
          <ul className="footer__social">
            <li className="footer__social-item">
              <a
                className="footer__social-link footer__social-link_icon_whatsapp"
                href="#"
              ></a>
            </li>
            <li className="footer__social-item">
              <a
                className="footer__social-link footer__social-link_icon_instagram"
                href="#"
              ></a>
            </li>
            <li className="footer__social-item">
              <a
                className="footer__social-link footer__social-link_icon_telegram"
                href="#"
              ></a>
            </li>
          </ul>
        </div>
        <div className="footer__wrapper">
          <p className="footer__copyright">
            Все фото и видео материалы являются собственностью автора. Любое
            копирование и использование материалов в сети Интернет или печатных
            СМИ, допускается только с условием размещения активной ссылки без
            запрета индексации или с письменного согласия администрации сайта.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
