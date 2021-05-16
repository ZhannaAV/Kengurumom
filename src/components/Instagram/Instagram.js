import './Instagram.css';
import instKenguruIcon from '../../images/instagram/inst-kenguru-icon.svg';
import PhotoGrid from '../PhotoGrid/PhotoGrid';

function Instagram() {
  return (
    <section className="instagram">
      <div className="instagram__text-block">
        <h2 className="instagram__text">Присоединяйтесь к нам в Instagram!</h2>
        <div className="instagram__kenguru-instagram">
          <img
            src={instKenguruIcon}
            alt="Иконка instagram"
            className="instagram__instagram-icon"
          />
          <h3 className="instagram__text">kenguru.mom</h3>
        </div>
      </div>
      <PhotoGrid />
    </section>
  );
}

export default Instagram;
