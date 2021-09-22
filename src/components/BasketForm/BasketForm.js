import './BasketForm.css';
import Button from '../Button/Button';
import TermsCheckbox from '../TermsCheckbox/TermsCheckbox';

function BasketForm() {
  return (
    <form className='basket-page__form'>
      <fieldset className='basket-page__fieldset'>
        <input required type='tel' className='basket-page__tel' placeholder='+7 (___)-___-__-__' />
        <textarea
          className='basket-page__address'
          placeholder='Адрес (улица, дом, квартира / офис)'
        />
      </fieldset>
      <TermsCheckbox />
      <Button type='submit' text='Оформить заказ' btnStyle='button_type_order' />
    </form>
  );
}

export default BasketForm;
