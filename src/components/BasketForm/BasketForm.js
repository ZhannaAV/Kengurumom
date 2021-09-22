import './BasketForm.css';
import Button from '../Button/Button';

function BasketForm() {
  return (
    <form className='basket-page__form'>
      <fieldset className='basket-page__fieldset'>
        <input type='tel' className='basket-page__tel' placeholder='+7 (___)-___-__-__' />
        <textarea
          className='basket-page__address'
          placeholder='Адрес (улица, дом, квартира / офис)'
        />
      </fieldset>
      <Button type='submit' text='Оформить заказ' btnStyle='button_type_order' />
    </form>
  );
}

export default BasketForm;
