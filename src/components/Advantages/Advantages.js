import './Advantages.css';
import handicraft from '../../images/advantages/handicraft.svg'
import reasonableConsumption from '../../images/advantages/reasonable-consumption.svg'
import uniqueCut from '../../images/advantages/unique-cut.svg'

function Advantages() {
  return (
    <section className="advantages">
      <ul className="advantages__cards">
        <li className="advantages__card-element">
          <img className="advantages__card-image" src={handicraft}
            alt="Ручная работа" />
          <h2 className="advantages__card-title">Ручная работа</h2>
          <p className="advantages__card-description">Все вещи сделаны
						вручную с любовью небольшими партиями</p>
        </li>
        <li className="advantages__card-element">
          <img className="advantages__card-image" src={reasonableConsumption}
            alt="Разумное потребление" />
          <h2 className="advantages__card-title">Разумное потребление</h2>
          <p className="advantages__card-description">Все вещи сделаны
						вручную с любовью небольшими партиями </p>
        </li>
        <li className="advantages__card-element">
          <img className="advantages__card-image" src={uniqueCut}
            alt="Уникальный крой" />
          <h2 className="advantages__card-title">Уникальный крой</h2>
          <p className="advantages__card-description">Все вещи сделаны
						вручную с любовью небольшими партиями </p>
        </li>
      </ul>
    </section>
  );
}

export default Advantages;