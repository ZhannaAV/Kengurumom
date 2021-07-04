import { Link } from 'react-router-dom';
import SectionWithBtn from './SectionWithBtn';
import tailorPhoto from '../../images/section-btn/tailor-section.jpg';
import presentPhoto from '../../images/section-btn/present-section.jpg';
import { PERSONAL_SEWING_PAGE, PRESENT_PAGE } from '../../config/links';
import Button from '../Button/Button';

function SectionsWithBtn() {
  return (
    <>
      <SectionWithBtn for={'tailoring'} placeText={'left'} placeImage={'right'} img={tailorPhoto}
                      alt={'предметы рукоделия'}
                      title={'Индивидуальный пошив'} text={'Выполним индивидуальный пошив на заказ\n'
      + '                        по вашим размерам и с возможностью\n'
      + '                        выбора ткани.'}>
        <Link to={PERSONAL_SEWING_PAGE}>
          <Button text={'Заказать'} type="button"/>
        </Link>
      </SectionWithBtn>
      <SectionWithBtn for={'present'} placeText={'right'} placeImage={'left'} img={presentPhoto}
                      alt={'подарочный сертификат'}
                      title={'Подарочный сертификат'} text={'Выполним индивидуальный пошив на заказ\n'
      + '                        по вашим размерам и с возможностью\n'
      + '                        выбора ткани.'}>
        <Link to={PRESENT_PAGE}>
          <Button text={'Заказать'} type="button"/>
        </Link>
      </SectionWithBtn>
    </>
  );
}

export default SectionsWithBtn;
