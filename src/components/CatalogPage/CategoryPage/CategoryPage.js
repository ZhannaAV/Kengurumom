import './CategoryPage.css';
import { useParams } from 'react-router-dom';
import PopularItem from '../../PopularItem/PopularItem';
<<<<<<< HEAD
=======
import CustomSelect from '../../CustomSelect/CustomSelect';
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479

function CategoryPage({ products, onPopupAddCartOpen }) {
  let { category } = useParams();
  const currentArr = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="catalog__wrapper">
<<<<<<< HEAD
      <select className="catalog__sort" id="" name="">
        <option value="0-3">0-3 мес (55 см)</option>
      </select>
      <div className="catalog__products">
        {currentArr.map((product) => (
          <PopularItem {...product} key={product.id} onPopupAddCartOpen={onPopupAddCartOpen} />
=======
      <div className="catalog__sort">
        <CustomSelect
          page="category"
          options={['Цена по убыванию', 'Цена по возрастанию']}
          startValue="Сортировать:"
        />
      </div>
      <div className="catalog__products">
        {currentArr.map((product) => (
          <PopularItem
            {...product}
            key={product.id}
            component={'catalog'}
            onPopupAddCartOpen={onPopupAddCartOpen}
          />
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
        ))}
      </div>
      <button className="button catalog__pagination">Показать еще</button>
    </div>
  );
}

export default CategoryPage;
