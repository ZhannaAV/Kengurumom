import './Product.css';
import ProdGallery from '../Product/ProdGallery/ProdGallery';
import { productPhotoData } from '../../config/constants';

function Product() {
  return (
    <section className="product">
      <ProdGallery galleryImages={productPhotoData} />
      <div className="product__specifications">
        <h2 className="product__title">Пелёнка-кокон "Авокадо"</h2>
        <h3 className="product__price">890 &#8381;</h3>
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
            от 0 до 6 месяцев
          </p>
        </div>
        <div className="product__specification-box">
          <p className="product__text">Состав:</p>
          <p className="product__text" id="product-structure">
            100% хлопок (Интерлок)
          </p>
        </div>
        <p className="product__description">
          Наши пеленальные коконы созданы для тех, кто ценит качество и комфорт.
          Пеленальный кокон на двухзамковой молнии сшит из сертифицированного
          трикотажного хлопка высшей категории качества. Потайные швы не
          потревожат нежную кожу малыша, а трикотаж не вызовет аллергии.
        </p>
        <p className="product__description">
          Многие мамы уже оценили пеленальные коконы и знают, на сколько это
          комфортная и удобная альтернатива пеленанию. Пройма пелёнки
          открывается, чтобы освободить ручки малыша и сохраняет физиологическое
          положение тела, позволяя ручкам и ножкам расправляться постепенно и
          естественно.
        </p>
        <p className="product__description">
          Обеспечивается отличная воздухопроницаемость, кожа дышит даже в жару.
        </p>
        <p className="product__description">
          Малышу уютно. В пелёнке прекрасно спится - мягкая бесшовная изнанка,
          не давит и не тянет. Кокон создаёт обволакивающую среду, к которой
          малыш привык о время его ожидания. Движения ребенка ограничены до той
          степени, при которой он не навредит себе и не проснется.
        </p>
        <p className="product__description">
          Удобно маме и папе. Надеть пелёнку очень легко, подгузник меняется без
          лишних движений. Папа легко справится ;) Можно носить и дома, и на
          прогулке в коляске.
        </p>
        <div className="product__specification-box">
          <p className="product__text">Артикул:</p>
          <p className="product__text" id="product-vendor-code">
            KNG.EW.K2152
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
