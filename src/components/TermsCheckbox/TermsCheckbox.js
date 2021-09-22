import './TermsCheckbox.css';

function TermsCheckbox() {
  return (
    <fieldset className='terms-checkbox'>
      <label form='terms' className='terms-checkbox__label'>
        <input required id='terms' type='checkbox' className='terms-checkbox__checkbox' />Я принимаю
        условия{' '}
        <a className='terms-checkbox__link' href='/terms-of-use' target='_blank'>
          Политики конфиденциальности
        </a>
      </label>
    </fieldset>
  );
}

export default TermsCheckbox;
