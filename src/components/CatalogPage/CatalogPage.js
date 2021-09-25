/* eslint-disable no-nested-ternary */
import './CatalogPage.css';
import { useState, useEffect } from 'react';
import { catalogCategories } from '../../config/links';
import SlickSlider from '../SharedComponents/Slider/SlickSlider';
import ProductsList from '../ProductsList/ProductsList';
import CustomSelect from '../CustomSelect/CustomSelect';

function CatalogPage({ products, onPopupAddCartOpen, media }) {
  const [category, setCategory] = useState('');
  const [filteredList, setFilteredList] = useState(products);
  const [width, setWidth] = useState(window.innerWidth);
  const [slides, setSlides] = useState(
    media.isDesktop ? 5 : media.isTabletVert ? 4 : media.isMobileHor ? 2 : 1,
  );
  const [showArrows, setShowArrows] = useState(!!media.isDesktop);

  useEffect(() => {
    setFilteredList(
      category ? products.filter(product => product.category === category) : products,
    );
  }, [category]);

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
    if (width > 1380) setShowArrows(true);
    else setShowArrows(false);
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

  return (
    <section className='catalog'>
      <h1 className='catalog__title'>Каталог</h1>
      <div className='catalog__categories-line'>
        <SlickSlider
          className='menu-slider'
          slides={slides}
          showArrows={showArrows}
          arrowType='menu'
        >
          {catalogCategories.map((categoryTitle, i) => (
            <button
              key={i}
              className='catalog__category'
              onClick={() => setCategory(categoryTitle)}
            >
              {categoryTitle}
            </button>
          ))}
        </SlickSlider>
      </div>
      <div className='catalog__wrapper'>
        <div className='catalog__sort'>
          <CustomSelect
            page='category'
            options={['Цена по убыванию', 'Цена по возрастанию']}
            startValue='Сортировать:'
          />
        </div>
        <ProductsList list={filteredList} onPopupAddCartOpen={onPopupAddCartOpen} />
        <button className='button catalog__pagination'>Показать еще</button>
      </div>
    </section>
  );
}

export default CatalogPage;
