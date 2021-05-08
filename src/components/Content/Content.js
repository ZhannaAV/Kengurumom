import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import {
  MAIN_PAGE,
  ABOUT_PAGE,
  CATALOGUE_PAGE,
  DELIVERY_PAGE,
  OFFER_PAGE,
  TERMS_OF_USE_PAGE,
  PRODUCT_PAGE,
} from '../../config/links';
import MainPage from '../MainPage/MainPage';
import AboutPage from '../AboutPage/AboutPage';
import DocumentPage from '../DocumentPage/DocumentPage';
import DeliveryPage from '../DeliveryPage/DeliveryPage';
import Button from '../Button/Button';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import CatalogPage from '../CatalogPage/CatalogPage';
import ProductPage from '../ProductPage/ProductPage';
import { exampleArrProducts } from '../../config/constants';

function Content(props) {
  const { isOpened, media, onPopupCareOpen } = props;
  
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Switch>
      <Route exact path={MAIN_PAGE}>
        <MainPage media={media} />
      </Route>

      <Route path={ABOUT_PAGE}>
        <AboutPage />
      </Route>

      <Route path={OFFER_PAGE}>
        <DocumentPage type="offer" />
      </Route>

      <Route path={TERMS_OF_USE_PAGE}>
        <DocumentPage type="terms-of-use" />
      </Route>

      <Route path={DELIVERY_PAGE}>
        <DeliveryPage />
      </Route>

      <Route path={CATALOGUE_PAGE}>
        <CatalogPage products={exampleArrProducts} />
      </Route>

      <Route exact path={`${PRODUCT_PAGE}/:id`}>
        <ProductPage
          products={exampleArrProducts}
          media={media}
          onPopupCareOpen={onPopupCareOpen}
        />
      </Route>

      {/* use for test !!! */}
      <Route path="/test_popup/">
        <div
          style={{
            width: '100wh',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button text="CLICK ME!" onClick={isOpened} />
        </div>
      </Route>

      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default Content;
