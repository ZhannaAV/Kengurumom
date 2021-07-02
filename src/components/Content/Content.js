<<<<<<< HEAD
import {useEffect} from 'react';
import './Content.css'
import {Route, Switch, useLocation} from 'react-router-dom';
=======
import { useEffect } from 'react';
import './Content.css';
import { Route, Switch, useLocation } from 'react-router-dom';
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
import {
  MAIN_PAGE,
  ABOUT_PAGE,
  CATALOGUE_PAGE,
  DELIVERY_PAGE,
  CONTACTS_PAGE,
  OFFER_PAGE,
  TERMS_OF_USE_PAGE,
  PRODUCT_PAGE,
<<<<<<< HEAD
=======
  ORDER_SUCCESS_PAGE,
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
} from '../../config/links';
import MainPage from '../MainPage/MainPage';
import AboutPage from '../AboutPage/AboutPage';
import DocumentPage from '../DocumentPage/DocumentPage';
import DeliveryPage from '../DeliveryPage/DeliveryPage';
import Button from '../Button/Button';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import CatalogPage from '../CatalogPage/CatalogPage';
import ProductPage from '../ProductPage/ProductPage';
import {exampleArrProducts} from '../../config/constants';
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ContactsPage from "../ContactsPage/ContactsPage";
<<<<<<< HEAD

function Content(props) {
  const { media, onPopupCareOpen, onPopupAddCartOpen } = props;
  
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <main className="content">
      {pathname !== MAIN_PAGE && (<BreadCrumbs/>)}
      <Switch>
        <Route exact path={MAIN_PAGE}>
          <MainPage media={media} onPopupAddCartOpen={onPopupAddCartOpen}/>
        </Route>

        <Route path={ABOUT_PAGE}>
          <AboutPage/>
        </Route>

        <Route path={OFFER_PAGE}>
          <DocumentPage type="offer"/>
        </Route>

        <Route path={TERMS_OF_USE_PAGE}>
          <DocumentPage type="terms-of-use"/>
        </Route>

        <Route path={DELIVERY_PAGE}>
          <DeliveryPage/>
        </Route>

        <Route path={CONTACTS_PAGE}>
          <ContactsPage/>
        </Route>

        <Route path={CATALOGUE_PAGE}>
          <CatalogPage products={exampleArrProducts} onPopupAddCartOpen={onPopupAddCartOpen}/>
=======
import OrderSuccessPage from '../OrderSuccessPage/OrderSuccessPage';

function Content(props) {
  const { media, onPopupCareOpen, onPopupAddCartOpen } = props;

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="content">
      {pathname !== MAIN_PAGE && <BreadCrumbs />}
      <Switch>
        <Route exact path={MAIN_PAGE}>
          <MainPage media={media} onPopupAddCartOpen={onPopupAddCartOpen} />
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

        <Route path={CONTACTS_PAGE}>
          <ContactsPage />
        </Route>

        <Route path={CATALOGUE_PAGE}>
          <CatalogPage
            media={media}
            products={exampleArrProducts}
            onPopupAddCartOpen={onPopupAddCartOpen}
          />
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
        </Route>

        <Route exact path={`${PRODUCT_PAGE}/:id`}>
          <ProductPage
            products={exampleArrProducts}
            media={media}
            onPopupCareOpen={onPopupCareOpen}
            onPopupAddCartOpen={onPopupAddCartOpen}
          />
        </Route>

<<<<<<< HEAD
=======
        <Route exact path={`${ORDER_SUCCESS_PAGE}/:id`}>
          <OrderSuccessPage />
        </Route>

>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
      {/* use for test !!! */}
      <Route path="/test_popup/">
        <div
          style={{
            width: '100wh',
            height: 'calc(100vh - 1111px);',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button text="CLICK ME!" btnStyle="" onClick={onPopupAddCartOpen} />
        </div>
      </Route>

        <Route path="*">
<<<<<<< HEAD
          <NotFoundPage/>
=======
          <NotFoundPage />
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
        </Route>
      </Switch>
    </main>
  );
}

export default Content;
