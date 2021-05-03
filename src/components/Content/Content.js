import { Route, Switch } from 'react-router-dom';
import {
  ABOUT_PAGE,
  CATALOGUE_PAGE,
  DELIVERY_PAGE,
  OFFER,
  TERMS_OF_USE,
} from '../../config/links';
import MainPage from '../MainPage/MainPage';
import About from '../About/About';
import Document from '../Document/Document';
import DeliveryPage from '../DeliveryPage/DeliveryPage';
import Button from '../Button/Button';
import ProductPage from '../ProductPage/ProductPage';
import CatalogPage from '../CatalogPage/CatalogPage';

import { exampleArrProducts } from '../../config/constants';

function Content(props) {
  const { isOpened, media } = props;

  return (
    <Switch>
      <Route exact path="/">
        <MainPage media={media} />
      </Route>

      <Route path={ABOUT_PAGE}>
        <About />
      </Route>

      <Route path={OFFER}>
        <Document type="offer" />
      </Route>

      <Route path={TERMS_OF_USE}>
        <Document type="terms-of-use" />
      </Route>

      <Route path={DELIVERY_PAGE}>
        <DeliveryPage />
      </Route>

      <Route exact path={CATALOGUE_PAGE}>
        <CatalogPage products={exampleArrProducts} />
      </Route>
      <Route exact path={`${CATALOGUE_PAGE}/:id`}>
        <ProductPage products={exampleArrProducts} media={media} />
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
    </Switch>
  );
}

export default Content;
