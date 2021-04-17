import { useState, useEffect } from "react";
import "./PhotoGrid.css";
import PhotoElement from "../PhotoElement/PhotoElement";
import photoInstOne from "../../images/instagram/inst-1.jpg";
import photoInstTwo from "../../images/instagram/inst-2.jpg";
import photoInstThree from "../../images/instagram/inst-3.jpg";
import photoInstFour from "../../images/instagram/inst-4.jpg";
import photoInstFive from "../../images/instagram/inst-5.jpg";
import photoInstSix from "../../images/instagram/inst-6.jpg";
import photoInstSeven from "../../images/instagram/inst-7.jpg";
import photoInstEight from "../../images/instagram/inst-8.jpg";

function PhotoGrid() {
  const [elements, setElements] = useState([]);

  const initialData = [
    { link: photoInstOne },
    { link: photoInstTwo },
    { link: photoInstThree },
    { link: photoInstFour },
    { link: photoInstFive },
    { link: photoInstSix },
    { link: photoInstSeven },
    { link: photoInstEight }
  ];

  useEffect(() => {
    setElements(initialData);
  }, []);

  return (
    <ul className="photo-grid">
      {elements.map((element, i) => (
        <PhotoElement
          link={element.link}
          key={i}
          additionalClass={i > 5 ? "photo-grid__element_not-active" : null}
        />
      ))}
    </ul>
  );
}

export default PhotoGrid;
