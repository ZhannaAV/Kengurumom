import './ContactsPage.css'
import {Link} from 'react-router-dom'
import Button from "../Button/Button";
function ContactsPage(){
  return (
<section className="contacts contacts_centered">
<h2 className="contacts__title">Контакты</h2>
  <div className="contacts__inner">
    <ul className="contacts__data">
      <li className="contacts__item">
        <h3 className="contacts__item-title">Телефон</h3>
        <p className="contacts__phone">+7 964 589 06 96</p>
      </li>
      <li className="contacts__item">
        <h3 className="contacts__item-title">Instagram</h3>
        <Link to='/' className="contacts__link">kenguru.mom</Link>
      </li>
      <li className="contacts__item">
        <h3 className="contacts__item-title">Почта</h3>
        <Link to='/' className="contacts__link">kenguru.mom@gmail.com</Link>
      </li>
    </ul>
    <form className="contacts__form">
      <h3 className="contacts__form-title">Хотите мы вам перезвоним?</h3>
      <fieldset className="contacts__fieldset">
        <input type="text" className="contacts__input" placeholder="Имя"/>
        <input type="phone" className="contacts__input" placeholder="Телефон"/>
        <textarea className="contacts__input contacts__textarea" placeholder="Текст"/>
      </fieldset>
      <Button type="submit" text="Отправить" style="button_type_contacts"/>
      <fieldset className="contacts__fieldset">
        <label form="terms" className="contacts__label"><input id="terms" type="checkbox" className="contacts__checkbox"/>Я принимаю условия <Link className="contacts__terms-link" to="/terms-of-use">Политики конфиденциальности</Link></label>
      </fieldset>
    </form>
  </div>
</section>
  )
}
export default ContactsPage