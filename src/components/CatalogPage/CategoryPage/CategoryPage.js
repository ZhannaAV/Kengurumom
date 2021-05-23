import './CategoryPage.css';
import { useParams } from 'react-router-dom';
import PopularItem from '../../PopularItem/PopularItem';

function CategoryPage({ products, onPopupAddCartOpen }) {
  let { category } = useParams();
  const currentArr = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="catalog__wrapper">
      <select className="catalog__sort" id="" name="">
        <option value="0-3">0-3 мес (55 см)</option>
      </select>
      <div className="catalog__products">
        {currentArr.map((product) => (
          <PopularItem {...product} key={product.id} onPopupAddCartOpen={onPopupAddCartOpen} />
        ))}
      </div>
      <button className="button catalog__pagination">Показать еще</button>
    </div>
  );
}

export default CategoryPage;
