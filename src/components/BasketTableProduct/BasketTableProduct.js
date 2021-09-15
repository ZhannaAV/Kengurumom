import './BasketTableProduct.css';

function BasketTableProduct({ product }) {
  return (
    <tr>
      <td>
        <img src={product.img} alt='' className='basket_page__product-img' />
      </td>
      <td>
        <h3 className='basket_page__product-title'>{product.title}</h3>
      </td>
      <td>
        <p className='basket_page__product-article'>{product.article}</p>
      </td>
      <td>
        <button className='basket_page__product-increase'>+</button>
        <span>{product.num}</span>
        <button className='basket_page__product-reduce'>-</button>
      </td>
      <td>
        <p className='basket_page__product-price'>{product.price} ₽</p>
      </td>
      <td>
        <button className='basket_page__product-remove'>elfk</button>
      </td>
    </tr>
  );
}

export default BasketTableProduct;
