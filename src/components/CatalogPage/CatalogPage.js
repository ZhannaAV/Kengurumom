import './CatalogPage.css';
import { catalogCategories } from '../../config/links';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import CategoryPage from './CategoryPage/CategoryPage';
<<<<<<< HEAD

function CatalogPage({ products, onPopupAddCartOpen }) {
  let { path, url } = useRouteMatch();

// такая структура временная. попозже я исправлю ее на более подходящую. сейчас просто тест работы
=======
import { useState, useEffect } from 'react';
import SlickSlider from '../SharedComponents/Slider/SlickSlider';

function CatalogPage({ products, onPopupAddCartOpen, media }) {
  let { path, url } = useRouteMatch();

  const [width, setWidth] = useState(window.innerWidth);
  const [slides, setSlides] = useState(
    media.isDesktop ? 5 : media.isTabletVert ? 4 : media.isMobileHor ? 2 : 1
  );
  const [showArrows, setShowArrows] = useState(media.isDesktop ? true : false);

  const updateWidth = () => {
    setWidth(window.innerWidth);
    if (width < 570) {
      setSlides(1);
    } else if (width < 857) {
      setSlides(2);
    } else if (width < 1020) {
      setSlides(4);
    } else {
      setSlides(5);
    }
  };

  const updateShowArrows = () => {
    width > 1380 ? setShowArrows(true) : setShowArrows(false);
  };

  useEffect(() => {
    updateWidth();
    updateShowArrows();
    window.addEventListener('resize', updateWidth);
    window.addEventListener('resize', updateShowArrows);
    return () => {
      window.removeEventListener('resize', updateWidth);
      window.removeEventListener('resize', updateShowArrows);
    };
  });

  // такая структура временная. попозже я исправлю ее на более подходящую. сейчас просто тест работы
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479

  return (
    <section className="catalog">
      <h1 className="catalog__title">Каталог</h1>
      <div className="catalog__categories-line">
<<<<<<< HEAD
        <nav className="catalog__categories">
=======
          <SlickSlider
            className="menu-slider"
            slides={slides}
            showArrows={showArrows}
            arrowType="menu"
          >
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
          </SlickSlider>
        {/* <nav className="catalog__categories">
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
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
<<<<<<< HEAD
        </nav>
      </div>
      <Switch>
        <Route exact path={path}>
          <CategoryPage products={products} onPopupAddCartOpen={onPopupAddCartOpen}/>
        </Route>
        <Route exact path={`${path}/:category`}>
          <CategoryPage products={products} onPopupAddCartOpen={onPopupAddCartOpen}/>
=======
        </nav> */}
      </div>
      <Switch>
        <Route exact path={path}>
          <CategoryPage
            products={products}
            onPopupAddCartOpen={onPopupAddCartOpen}
          />
        </Route>
        <Route exact path={`${path}/:category`}>
          <CategoryPage
            products={products}
            onPopupAddCartOpen={onPopupAddCartOpen}
          />
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
        </Route>
      </Switch>
    </section>
  );
}

export default CatalogPage;
