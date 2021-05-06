import {Route, Switch} from "react-router-dom";
import {MAIN_PAGE, ABOUT_PAGE, CATALOGUE_PAGE, DELIVERY_PAGE, OFFER, TERMS_OF_USE} from "../../config/links";
import {testObjectOfProduct} from "../../config/constants";
import MainPage from "../MainPage/MainPage";
import AboutPage from "../AboutPage/AboutPage";
import Document from "../Document/Document";
import DeliveryPage from "../DeliveryPage/DeliveryPage";
import Product from "../Product/Product";
import Button from "../Button/Button";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function Content(props) {
  const {isOpened, media, onPopupCareOpen} = props

  return (
    <Switch>
      <Route exact path={MAIN_PAGE}>
        <MainPage media={media}/>
      </Route>

      <Route path={ABOUT_PAGE}>
        <AboutPage />
      </Route>

      <Route path={OFFER}>
        <Document type='offer'/>
      </Route>

      <Route path={TERMS_OF_USE}>
        <Document type='terms-of-use'/>
      </Route>

      <Route path={DELIVERY_PAGE}>
        <DeliveryPage/>
      </Route>

      <Route path={CATALOGUE_PAGE}>
        <Product 
          product={testObjectOfProduct}
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
          <Button text="CLICK ME!" onClick={isOpened}/>
        </div>
      </Route>

      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>

  )
}

export default Content