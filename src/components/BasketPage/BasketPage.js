import { useSelector } from 'react-redux';
import './BasketPage.css';
import BasketTableProduct from '../BasketTableProduct/BasketTableProduct';

function BasketPage() {
  const goods = useSelector(state => state.goods.goodsInBasket);
  const goodsCounterInBasket = useSelector(state => state.goods.goodsCounterInBasket);

  return (
    <section className='basket-page basket-page_centered'>
      <h2 className='basket_page__title'>Корзина</h2>
      <div className='basket-page__top'>
        <p className='basket-page__info'>Ваш заказ({goodsCounterInBasket})</p>
        <button className='basket-page__clear-btn'>Очистить</button>
      </div>
      {goodsCounterInBasket > 0 && (
        <table className='basket-page__table'>
          <tbody>
            {goods.map(product => (
              <BasketTableProduct product={product} />
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default BasketPage;
