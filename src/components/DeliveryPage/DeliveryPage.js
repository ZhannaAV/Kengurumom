import React from 'react';
import './DeliveryPage.css'
import iconDelivery from '../../images/deliveryPage/delivery_icon.svg'
import iconPay from '../../images/deliveryPage/pay_icon.svg'
import iconRefund from '../../images/deliveryPage/refund_icon.svg'

function DeliveryPage() {
  return (
    <section className="delivery">
      <h2 className="delivery__title">Доставка и оплата</h2>
      <p className="delivery__world-title">Мы осуществляем доставку по всему миру</p>
      <p className="delivery__world-text">Онлайн магазин <span className="delivery__text-aссent">kenguru</span> работает
        с понедельника по пятницу
        с 09:00 до 21:00 по МСК</p>
      <div className="delivery__block-delivery">
        <div className="delivery__subtitle-block">
          <img src={iconDelivery} alt="иконка доставки"/>
          <h3 className="delivery__subtitle">Доставка</h3>
        </div>
        {/*текст блока доставка*/}
        <ul className="delivery__list">
          <li className="delivery__item">
            <p className="delivery__text">Для доставки ваших заказов по территории России и стран СНГ(Беларусь, Армения,
              Киргизия, Казахстан),
              мы пользуемся услугами экспресс-доставки CDEK и Почты России. </p>
          </li>
          <li className="delivery__item">
            <p className="delivery__text">Для остальных международных отправлений мы осуществляем доставку курьерской
              службой EMS.</p>
          </li>
          <li className="delivery__item">
            <p className="delivery__text">Точная стоимость и примерные сроки доставки будут рассчитаны после оформления
              заказа.</p>
          </li>
          <li className="delivery__item">
            <p className="delivery__text">Просто укажите нужный адрес на странице оформления заказа и выберите удобный
              способ получения заказа</p>
          </li>
          <li className="delivery__item">
            <p className="delivery__text">Если вам нужна доставка к определенной дате или празднику, пожалуйста,
              сообщите нам об этом заранее –
              мы поможем подобрать наилучший вариант доставки.</p>
          </li>
        </ul>
        <h4 className="delivery__subtitle-methods">Cпособы доставки</h4>
        {/*понумерованный список подблока доставки*/}
        <ol className="delivery__counter-list">
          <li className="delivery__counter-item"><h5 className="delivery__subtitle-text">Самовывоз из пункта выдачи
            компании СДЭК</h5></li>
          {/*список с галочкой*/}
          <ul className="delivery__icon-list">
            <li className="delivery__icon-item"><p className="delivery__text">отправляем каждый рабочий день</p></li>
            <li className="delivery__icon-item"><p className="delivery__text">оплатить заказ можно как при оформлении,
              так и при получении (наличные, карта)</p></li>
            <li className="delivery__icon-item"><p className="delivery__text">Вы получите трек-номер для отслеживания и
              смс-уведомление, когда посылка поступит в пункт выдачи</p></li>
          </ul>
          <li className="delivery__counter-item"><h5 className="delivery__subtitle-text">Почта России</h5></li>
          <ul className="delivery__icon-list">
            <li className="delivery__icon-item"><p className="delivery__text">отправляем заказы два раза в неделю:
              каждый понедельник и четверг</p></li>
            <li className="delivery__icon-item"><p className="delivery__text">заказы, отправляемые Почтой России
              оплачиваются заранее, перед отправкой. Оплата при получении невозможна</p></li>
            <li className="delivery__icon-item"><p className="delivery__text">Вы получите трек-номер для отслеживания, а
              Почта России пришлёт смс или уведомление о поступлении Вашего заказа в отделение почты</p></li>
            <li className="delivery__icon-item"><p className="delivery__text">к сожалению, мы не отправляем посылки
              наложенным платежом</p></li>
          </ul>
          <li className="delivery__counter-item"><h5 className="delivery__subtitle-text">Курьер компании СДЭК до
            двери</h5></li>
          <ul className="delivery__icon-list">
            <li className="delivery__icon-item"><p className="delivery__text">отправляем заказы каждый рабочий день</p>
            </li>
            <li className="delivery__icon-item"><p className="delivery__text">оплатить заказ можно как при оформлении,
              так и при получении (наличные, карта)</p></li>
            <li className="delivery__icon-item"><p className="delivery__text">Вы получите трек-номер для отслеживания
              Вашего заказа</p></li>
            <li className="delivery__icon-item"><p className="delivery__text">при поступлении посылки на сортировочный
              склад СДЭК, компания дополнительно свяжется с Вами для согласования даты и времени доставки</p></li>
          </ul>
          <li className="delivery__counter-item"><h5 className="delivery__subtitle-text">Экспресс служба EMS</h5></li>
          <ul className="delivery__icon-list">
            <li className="delivery__icon-item"><p className="delivery__text">данная служба используется для отправки
              международных отправлений</p></li>
            <li className="delivery__icon-item"><p className="delivery__text">сроки доставки варьируются от 5 до 14
              календарных дней</p></li>
            <li className="delivery__icon-item"><p className="delivery__text">данная доставка возможна только по
              предоплате</p></li>
          </ul>
        </ol>
      </div>
      {/*блок оплата*/}
      <div className="delivery__block-payment">
        <div className="delivery__subtitle-block delivery__subtitle-block_place_payment">
          <img src={iconPay} alt="иконка оплаты"/>
          <h3 className="delivery__subtitle">Оплата</h3>
        </div>
        <div className="delivery__inner">
          <p className="delivery__subtitle-text delivery__subtitle-text_place_payment">В зависимости от выбранного
            способа
            доставки сайт предложит разные варианты оплаты</p>
          <ul className="delivery__icon-list">
            <li className="delivery__icon-item">
              <p className="delivery__text">при получении товара</p>
            </li>
            <li className="delivery__icon-item">
              <p className="delivery__text">предоплата при оформлении заказа</p>
            </li>
            <li className="delivery__icon-item">
              <p className="delivery__text">В случае, если Вы выбрали предоплату, то после оформления и подтверждения
                заказа Вам на почту придет ссылка на онлайн оплату картой;</p>
            </li>
            <li className="delivery__icon-item">
              <p className="delivery__text">В случае, если Вы выбрали предоплату, то после оформления и подтверждения
                заказа Вам на почту придет ссылка на онлайн оплату картой;</p>
            </li>
          </ul>
        </div>
      </div>
      {/*блок обмен и возврат*/}
      <div className="delivery__block-refund">
        <div className="delivery__subtitle-block delivery__subtitle-block_place_refund">
          <img src={iconRefund} alt="иконка возврата"/>
          <h3 className="delivery__subtitle">Обмен и возврат</h3>
        </div>
        <div className="delivery__inner">
          <ul className="delivery__icon-list">
            <li className="delivery__icon-item">
              <p className="delivery__text">согласно постановлению Правительства РФ от 19.01.1988 №55 детские товары
                надлежащего качества не подлежат возврату или обмену</p>
            </li>
            <li className="delivery__icon-item">
              <p className="delivery__text">возврат изделий ясельной группы возможен только при наличии брака. Срок
                возврата товара ненадлежащего качества составляет 14 дней с момента получения товара</p>
            </li>
            <li className="delivery__icon-item">
              <p className="delivery__text">обмен изделия на изделие другого размера возможен при сохранении его
                товарного
                вида
                и бирок. Для оформления заявки на обмен необходимо связаться с нами в течении 2-х суток с момента
                получения заказа</p>
            </li>
            <li className="delivery__icon-item">
              <p className="delivery__text">отправка оплачивается покупателем и будет возмещена после получения товара
                магазином на основе предъявленных документов. Отправка нового товара оплачивается магазином</p>
            </li>
            <li className="delivery__icon-item">
              <p className="delivery__text">для того, чтобы вернуть или обменять товар, свяжитесь с нами любым удобным
                для
                вас способом, сообщите номер заказа и причину возврата. Пожалуйста, по возможности прикрепите
                фотографии,
                подтверждающие наличие некомплектации, брака / некомплекта</p>
            </li>
            <li className="delivery__icon-item">
              <p className="delivery__text">возврат переведённых средств производится на ваш банковский счёт в течение
                5-15 рабочих дней (срок зависит от банка, который выдал вашу банковскую карту</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default DeliveryPage