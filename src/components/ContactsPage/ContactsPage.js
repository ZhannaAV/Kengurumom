import './ContactsPage.css';
import Button from '../Button/Button';
import TermsCheckbox from '../TermsCheckbox/TermsCheckbox';

function ContactsPage() {
  return (
    <section className='contacts contacts_centered'>
      <h2 className='contacts__title'>Контакты</h2>
      <div className='contacts__inner'>
        <ul className='contacts__data'>
          <li className='contacts__item'>
            <h3 className='contacts__item-title'>Телефон</h3>
            <a href='tel:+79645890696' className='contacts__link'>
              +7 964 589 06 96
            </a>
          </li>
          <li className='contacts__item'>
            <h3 className='contacts__item-title'>Instagram</h3>
            <a href='https' target='_blank' className='contacts__link'>
              kenguru.mom
            </a>
          </li>
          <li className='contacts__item'>
            <h3 className='contacts__item-title'>Почта</h3>
            <a href='mailto:kenguru.mom@gmail.com' className='contacts__link'>
              kenguru.mom@gmail.com
            </a>
          </li>
        </ul>
        <form className='contacts__form'>
          <h3 className='contacts__form-title'>Хотите мы вам перезвоним?</h3>
          <fieldset className='contacts__fieldset'>
            <input type='text' className='contacts__input' placeholder='Имя' />
            <input type='phone' className='contacts__input' placeholder='Телефон' required />
            <textarea
              className='contacts__input contacts__textarea'
              placeholder='Ваше сообщение'
              required
            />
          </fieldset>
          <Button type='submit' text='Отправить' btnStyle='button_type_contacts' />
          <TermsCheckbox />
        </form>
      </div>
    </section>
  );
}

export default ContactsPage;
