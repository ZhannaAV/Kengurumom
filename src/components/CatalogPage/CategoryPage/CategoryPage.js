import './CategoryPage.css';
import { useParams } from 'react-router-dom';
import PopularItem from '../../PopularItem/PopularItem';
import CustomSelect from '../../CustomSelect/CustomSelect';

function CategoryPage({ products, onPopupAddCartOpen }) {
  const { category } = useParams();
  const currentArr = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="catalog__wrapper">
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
        ))}
      </div>
      <button className="button catalog__pagination">Показать еще</button>
    </div>
  );
}

export default CategoryPage;
