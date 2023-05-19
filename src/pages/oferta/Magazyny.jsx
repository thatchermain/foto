import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../styles/Oferta.scss";
import Magazyn from "../../assets/images/oferta/magazyny.png";

const Magazyny = () => {
  return (
    <article className="section container px-5 ">
      <Row className="mt-5 pt-5 px-md-5">
        <h2 className="section__title">Magazyny energii</h2>
        <p className="section__description">
          Magazyny energii, baterie oraz inwertery hybrydowe to
          <strong>Twoja niezależność energetyczna.</strong>
          To rozwiązania, które pozwalają magazynować energię wyprodukowaną z
          instalacji fotowoltaicznej. Stanowią one bardzo atrakcyjne rozwiązanie
          w szczególności dla osób, które nie zużywają dużo energii w ciągu
          dnia, chcą natomiast wykorzystywać ją na własne potrzeby, nie zaś
          oddawać do sieci.
        </p>
      </Row>
      <h3 className="section__title-centered">
        Magazyny energii – Twoja energia z fotowoltaiki – zawsze gdy jej
        potrzebujesz.
      </h3>
      <Row className="mt-5  px-md-5">
        <h2 className="section__title">
          MAGAZYN ENERGII = NIEZALEŻNOŚĆ ENERGETYCZNA
        </h2>
      </Row>
      <Row className="mt-5  px-md-5 pb-5 mb-5">
        <p className="section__description">
          Większość instalacji fotowoltaicznych na polskim rynku funkcjonuje w
          systemie on-grid. Oznacza to, że domowa instalacja fotowoltaiczna jest
          połączona z publiczną siecią energetyczną. Sieć ta służy też jako
          magazyn energii – nadwyżki energii z domowej elektrowni
          fotowoltaicznej są tam przechowywane. Można je odebrać w chwili
          niedoboru energii – w nocy czy w miesiącach zimowych, kiedy produkcja
          z paneli jest niższa niż latem.
        </p>
        <p className="section__description">
          W świetle obowiązujących przepisów właściciele instalacji PV do mocy
          10 kWp mogą odebrać 0,8 kW za każdą oddaną 1 kWh, z kolei w przypadku
          instalacji o mocy 10-50 kWp jest to 0,7 kW. Oznacza to, że nie
          wykorzystujemy w pełni energii wyprodukowanej przez naszą instalację
          PV.
        </p>
        <Col lg={8}>
          <p className="section__description">
            Jeśli poszukujesz niezależności energetycznej – rozwiązaniem jest
            magazyn energii, który pozwala na przechowywanie energii – zamiast
            wysyłanie jej do sieci publicznej.
          </p>
          <p className="section__description">
            Magazyn energii nie tylko przechowuje energię na później ale również
            chroni użytkownika przed awarią zasilania. Gdy posiadamy magazyn
            energii przerwa w dostawie prądu nie przeszkodzi w pracy urządzeń
            elektrycznych, dom będzie mógł funkcjonować jak w normalnym trybie,
            nie narażając się na straty finansowe czy długotrwały brak energii
            elektrycznej.
          </p>
          <p className="section__description">
            Dzięki systemowi magazynowania energii z własnej instalacji
            fotowoltaicznej, możesz cieszyć się własną, zieloną energią o każdej
            porze dnia i nocy.
          </p>
        </Col>
        <Col lg={4}>
          <img src={Magazyn} alt="" className="section__img" />
        </Col>
      </Row>
    </article>
  );
};

export default Magazyny;
