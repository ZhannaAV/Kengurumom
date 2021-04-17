import { useState, useEffect } from "react";
import "./Advantages.css";
import AdvantageElement from "../AdvantageElement/AdvantageElement";
import handicraft from "../../images/advantages/handicraft.svg";
import reasonableConsumption from "../../images/advantages/reasonable-consumption.svg";
import uniqueCut from "../../images/advantages/unique-cut.svg";

function Advantages() {
  const [elements, setElements] = useState([]);

  const initialData = [
    {
      image: handicraft,
      alt: "Ручная работа",
      title: "Ручная работа",
      description: "Все вещи сделаны вручную с любовью небольшими партиями",
    },
    {
      image: reasonableConsumption,
      alt: "Разумное потребление",
      title: "Разумное потребление",
      description: "Все вещи сделаны вручную с любовью небольшими партиями",
    },
    {
      image: uniqueCut,
      alt: "Уникальный крой",
      title: "Уникальный крой",
      description: "Все вещи сделаны вручную с любовью небольшими партиями",
    },
  ];

  useEffect(() => {
    setElements(initialData);
  }, []);

  return (
    <section className="advantages">
      <ul className="advantages__cards">
        {elements.map((element, i) => (
          <AdvantageElement
            image={element.image}
            alt={element.alt}
            title={element.title}
            description={element.description}
            key={i}
          />
        ))}
      </ul>
    </section>
  );
}

export default Advantages;