import './Popular.css';

import popular_cocoon from '../../images/popular_cocoon.png';
import popular_sleepingbag from '../../images/popular_sleepingbag.png';
import popular_milksnud from '../../images/popular_milksnud.png';
import popular_avokado from '../../images/popular_avokado.png';

import PopularItem from '../../components/PopularItem/PopularItem';
import SlickSlider from '../SharedComponents/Slider/SlickSlider';

//temp config. replace it with tests
const popularConfig = [
  {
    new: false,
    title: "Пеленальный кокон",
    src: popular_cocoon,
    price: 890,
    priceSale: 1090
  },
  {
    new: true,
    title: "Спальник",
    src: popular_sleepingbag,
    price: 890,
    priceSale: undefined
  },
  {
    new: false,
    title: "Милкснуд",
    src: popular_milksnud,
    price: 1090,
    priceSale: undefined
  },
  {
    new: false,
    title: 'Пелёнка-кокон "Авокадо"',
    src: popular_avokado,
    price: 1200,
    priceSale: undefined
  },
];

export default function Popular(props){
  return (
    <section class="popular">
      <h2 class="popular__title">Популярное</h2>
      <SlickSlider className="content-slider">
        {popularConfig.map(item => (
          <PopularItem item={item} />
        ))}
      </SlickSlider>
    </section>
  );
}