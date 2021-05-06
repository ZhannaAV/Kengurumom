import './CategoryPage.css';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import PopularItem from '../../PopularItem/PopularItem';
import ProductPage from '../../ProductPage/ProductPage';

function CategoryPage({ products, media, onPopupCareOpen }) {
  let { path } = useRouteMatch();
  let { category } = useParams();
  const currentArr = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <Switch>
      <Route exact path={path}>
        <div className="catalog__wrapper">
          <select className="catalog__sort" id="" name="">
            <option value="0-3">0-3 мес (55 см)</option>
          </select>
          <div className="catalog__products">
            {currentArr.map((product) => (
              <PopularItem {...product} key={product.id} />
            ))}
          </div>
          <button className="button catalog__pagination">Показать еще</button>
        </div>
      </Route>
      <Route path={`${path}/:id`}>
        <ProductPage products={currentArr} media={media} onPopupCareOpen={onPopupCareOpen} />
      </Route>
    </Switch>
  );
}

export default CategoryPage;
