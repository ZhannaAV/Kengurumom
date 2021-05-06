import './CatalogPage.css';
import { catalogCategories } from '../../config/links';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import CategoryPage from './CategoryPage/CategoryPage';

function CatalogPage({ products, media }) {
  let { path, url } = useRouteMatch();

  return (
    <section className="catalog">
      <h1 className="catalog__title">Каталог</h1>
      <div className="catalog__categories-line">
        <nav className="catalog__categories">
          {catalogCategories.map((link, i) => (
            <NavLink
              activeClassName="selected"
              key={i}
              className="catalog__category"
              to={`${url}/${link[1]}`}
            >
              {link[0]}
            </NavLink>
          ))}
        </nav>
      </div>
      <Switch>
        <Route exact path={path}>
          <CategoryPage products={products} />
        </Route>
        <Route path={`${path}/:category`}>
          <CategoryPage products={products} media={media} />
        </Route>
      </Switch>
    </section>
  );
}

export default CatalogPage;
