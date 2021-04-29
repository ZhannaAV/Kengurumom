import './Product.css';
import ProdGallery from '../Product/ProdGallery/ProdGallery';

function Product({ product }) {
  return (
    <section className="product">
      <ProdGallery photos={product.photos} />
      <div className="product__specifications">
        <h2 className="product__title">{product.name}</h2>
        <h3 className="product__price">{`${product.price}`} &#8381;</h3>
        <div className="product__specification-box">
          <p className="product__text">Размер:</p>
          <select
            className="select-custom"
            id="product-clothes-size"
            name="clothes-size"
          >
            <option value="0-3">0-3 мес (55 см)</option>
            <option value="3-6">3-6 мес (65 см)</option>
            <option value="7-12">7-12 мес (77 см)</option>
          </select>
        </div>
        <button className="button button_type_add-to-card">В корзину</button>
        <div className="product__specification-box">
          <p className="product__text">Рекомендуемый возраст:</p>
          <p className="product__text" id="product-recommended-age">
            {product.recommendedAge}
          </p>
        </div>
        <div className="product__specification-box">
          <p className="product__text">Состав:</p>
          <p className="product__text" id="product-structure">
            {product.structure}
          </p>
        </div>
        {product.description.map((element, i) => (
          <p key={i} className="product__description">
            {element}
          </p>
        ))}
        <div className="product__specification-box">
          <p className="product__text">Артикул:</p>
          <p className="product__text" id="product-vendor-code">
            {product.vendorCode}
          </p>
        </div>
        <a className="product__care-link" href="#" target="_blank">
          Рекомендация по уходу
        </a>
      </div>
    </section>
  );
}

export default Product;
