import './ProductList.css';
import PopularItem from '../PopularItem/PopularItem';

function ProductsList({ list, onPopupAddCartOpen }) {
  return (
    <div className='products-list'>
      {list.map(product => (
        <PopularItem
          {...product}
          key={product.id}
          component={'catalog'}
          onPopupAddCartOpen={onPopupAddCartOpen}
        />
      ))}
    </div>
  );
}

export default ProductsList;
