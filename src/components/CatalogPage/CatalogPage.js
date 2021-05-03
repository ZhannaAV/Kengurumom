import './CatalogPage.css';
import { catalogCategories } from '../../config/links';
import { Link } from 'react-router-dom';
import PopularItem from '../PopularItem/PopularItem';

function CatalogPage({ products }) {
  return (
    <section className="catalog">
      <h1 className="catalog__title">Каталог</h1>
      <div className="catalog__categories-line">
        <nav className="catalog__categories">
          {catalogCategories.map((link, i) => (
            <Link key={i} className="catalog__category" to={link[1]}>
              {link[0]}
            </Link>
          ))}
        </nav>
      </div>
      <div className="catalog__wrapper">
        <select className="catalog__sort" id="" name="">
          <option value="0-3">0-3 мес (55 см)</option>
        </select>
        <div className="catalog__products">
          {products.map((product) => (
            <PopularItem {...product} key={product.id} />
          ))}
        </div>
        <button className="button catalog__pagination">Показать еще</button>
      </div>
    </section>
  );
}

export default CatalogPage;
