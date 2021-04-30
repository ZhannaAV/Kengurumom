import './TopSlider.css';
import slider1 from '../../images/slider/photo-on-slider-1.jpg';
import slider2 from '../../images/slider/photo-on-slider-2.jpg';
// import { useState } from 'react';
// import cn from 'classnames';
import Button from "../Button/Button";

function TopSlider() {

	// const [isFirstSlide, setIsFirstSlide] = useState(true);

    return (
        <section className="top-slider">
			<ul className="top-slider__list">
				<li className="top-slider__slide top-slider__slide_active">
					<div className="top-slider__cover">
						<div className="top-slider__contain">
							<h2 className="top-slider__title">
                                <span className="top-slider__title_accent">Kenguru </span>
                                комфорт	и эстетика с первых дней
							</h2>
							<p className="top-slider__subtitle">Качественная одежда и аксессуары
								для новорожденных и мам.
							</p>
							<p className="top-slider__subtitle">
                                От сердца к сердцу!
							</p>
							<Button text={'Заказать'}/>
						</div>
						<div className="top-slider__overlay">
							<img className="top-slider__background" src={slider1} alt="#" />
						</div>
					</div>
				</li>
				<li className="top-slider__slide">
					<div className="top-slider__cover">
						<div className="top-slider__contain">
							<h2 className="top-slider__title"><span className="top-slider__title_accent">Индивидуальный </span> 
								пошив
							</h2>
							<p className="top-slider__subtitle">По Вашим размерам 
								и Вашему выбору ткани
							</p>
                            <Button text={'В каталог'}/>
						</div>
						<div className="top-slider__overlay">
							<img className="top-slider__background" src={slider2} alt="#" />
						</div>
					</div>
				</li>
			</ul>
			<ul className="top-slider__navigation">
				<li className="top-slider__dott top-slider__dott_active"></li>
				<li className="top-slider__dott"></li>
			</ul>
		</section>
    );
}

export default TopSlider;