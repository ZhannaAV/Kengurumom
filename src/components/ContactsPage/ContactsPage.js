import './ContactsPage.css'
<<<<<<< HEAD
import {Link} from 'react-router-dom'
=======
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
import Button from "../Button/Button";
function ContactsPage(){
  return (
<section className="contacts contacts_centered">
<h2 className="contacts__title">Контакты</h2>
  <div className="contacts__inner">
    <ul className="contacts__data">
      <li className="contacts__item">
        <h3 className="contacts__item-title">Телефон</h3>
<<<<<<< HEAD
        <p className="contacts__phone">+7 964 589 06 96</p>
      </li>
      <li className="contacts__item">
        <h3 className="contacts__item-title">Instagram</h3>
        <Link to='/' className="contacts__link">kenguru.mom</Link>
      </li>
      <li className="contacts__item">
        <h3 className="contacts__item-title">Почта</h3>
        <Link to='/' className="contacts__link">kenguru.mom@gmail.com</Link>
=======
        <a href="tel:+79645890696" className="contacts__link">+7 964 589 06 96</a>
      </li>
      <li className="contacts__item">
        <h3 className="contacts__item-title">Instagram</h3>
        <a href="#" target="_blank" className="contacts__link">kenguru.mom</a>
      </li>
      <li className="contacts__item">
        <h3 className="contacts__item-title">Почта</h3>
        <a href="mailto:kenguru.mom@gmail.com" className="contacts__link">kenguru.mom@gmail.com</a>
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
      </li>
    </ul>
    <form className="contacts__form">
      <h3 className="contacts__form-title">Хотите мы вам перезвоним?</h3>
      <fieldset className="contacts__fieldset">
        <input type="text" className="contacts__input" placeholder="Имя"/>
        <input type="phone" className="contacts__input" placeholder="Телефон"/>
<<<<<<< HEAD
        <textarea className="contacts__input contacts__textarea" placeholder="Текст"/>
      </fieldset>
      <Button type="submit" text="Отправить" btnStyle="button_type_contacts"/>
      <fieldset className="contacts__fieldset">
        <label form="terms" className="contacts__label"><input id="terms" type="checkbox" className="contacts__checkbox"/>Я принимаю условия <Link className="contacts__terms-link" to="/terms-of-use">Политики конфиденциальности</Link></label>
=======
        <textarea className="contacts__input contacts__textarea" placeholder="Ваше сообщение"/>
      </fieldset>
      <Button type="submit" text="Отправить" btnStyle="button_type_contacts"/>
      <fieldset className="contacts__fieldset">
        <label form="terms" className="contacts__label"><input id="terms" type="checkbox" className="contacts__checkbox"/>Я принимаю условия <a className="contacts__terms-link" href="/terms-of-use" target="_blank" >Политики конфиденциальности</a></label>
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
      </fieldset>
    </form>
  </div>
</section>
  )
}
export default ContactsPage