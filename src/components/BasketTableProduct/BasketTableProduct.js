import './BasketTableProduct.css';
import { useDispatch } from 'react-redux';
import { removeProduct, increaseProduct, reduceProduct } from '../../redux/actions';
import deleteIcon from '../../images/cart_delete_icon.svg';
import plusIcon from '../../images/plus.svg';
import minusIcon from '../../images/minus.svg';

function BasketTableProduct({ product }) {
  const dispatch = useDispatch();

  return (
    <div className='basket_page__product'>
      <img src={product.img} alt={product.title} className='basket_page__product-img' />

      <h3 className='basket_page__product-title'>{product.title}</h3>

      <p className='basket_page__product-article'>Артикл {product.article}</p>

      <div className='basket_page__product-counter'>
        <button
          className='basket_page__product-counter-btn'
          onClick={() => dispatch(increaseProduct(product))}
        >
          <img
            className='basket_page__counter-image'
            src={minusIcon}
            alt={`Удалить из корзины ${product.title}`}
          />
        </button>
        <span className='basket_page__product-number'>{product.num}</span>
        <button
          className='basket_page__product-counter-btn'
          onClick={() => dispatch(reduceProduct(product))}
        >
          <img
            className='basket_page__counter-image'
            src={plusIcon}
            alt={`Удалить из корзины ${product.title}`}
          />
        </button>
      </div>

      <p className='basket_page__product-price'>{product.price} ₽</p>

      <button
        className='basket_page__product-remove'
        onClick={() => dispatch(removeProduct(product))}
      >
        <img
          className='basket-page__remove-img'
          src={deleteIcon}
          alt={`Удалить из корзины ${product.title}`}
        />
      </button>
    </div>
  );
}

export default BasketTableProduct;
