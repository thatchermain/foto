import React from "react";
import { Row } from "react-bootstrap";
import "../../styles/Oferta.scss";

const Ladowarki = () => {
  return (
    <article className="section container px-5 ">
      <Row className="mt-5 pt-5 px-md-5">
        <h2 className="section__title">Ładowarki samochodowe</h2>
        <p className="section__description">
          Elektromobilność staje się coraz bardziej popularna w naszym kraju.
        </p>
        <p className="section__description">
          Statystyki mówią obecnie o 37 000 zarejestrowanych pojazdach
          elektrycznych (statystyki na koniec września 2020r.) Wzrost szacuje
          się na poziomie ponad 100% względem roku poprzedniego.
        </p>
      </Row>
      <Row className="mt-5  px-md-5">
        <h3 className="section__title-centered">
          Elektromobilność – ekologia i oszczędności
        </h3>
        <p className="section__description">
          Ładowanie akumulatorów samochodu elektrycznego za pomocą domowej
          instalacji jest bardziej opłacalne niż korzystanie z ładowarek
          publicznych.
        </p>
        <p className="section__description">
          Jeśli głównie klient porusza się po mieście to zasilanie pojazdu
          dzięki połączeniu z fotowoltaiką jest bardzo opłacalne pod względem
          ekonomicznym. Przy korzystaniu z pojazdu krótkodystansowo koszty
          zasilania pojazdu spadają praktycznie do zera.
        </p>
        <p className="section__description">
          Ładowanie aut elektrycznych może się odbywać na kilka sposobów.
          Najszybszą, ale i najdroższą metodą uzupełniania energii w ogniwach
          pojazdu są publiczne stacje szybkiego ładowania. Koszt ładowania przy
          średniej prędkości wynosi ok. 1,20 zł/kWh, natomiast na superszybkich
          stacjach DC cena ta rośnie do ok. 2 zł/kWh.
        </p>
        <p className="section__description">
          Dużo tańsze, ale standardowo bardzo wolne, jest ładowanie z domowego
          gniazdka prądem zmiennym (AC) o napięciu 230 V i mocą 2,3 kW.
          Zakładając, że właściciel pojazdu elektrycznego będzie ładować go
          korzystając z popularnej taryfy dla gospodarstw domowych G11, koszt 1
          kWh wyniesie ok. 64 groszy. W takim przypadku naładowanie baterii do
          80% kosztować będzie już ok. 22 zł, ale potrwa to aż kilkanaście
          godzin.
        </p>
        <p className="section__description">
          Taki proces można znacząco przyspieszyć za pomocą ładowarek domowych
          typu wallbox. W połączeniu z odpowiednio dobraną instalacją
          fotowoltaiczną ładowanie samochodu może być nie tylko praktycznie
          bezpłatne ale i również bardzo szybkie.
        </p>
        <p className="section__description">
          Wówczas ładowanie odbywa się bezpośrednio z instalacji fotowoltaicznej
          za pomocą prądu stałego.
        </p>
        <p className="section__description">
          Zalety elektromobilności to niższe emisje CO2, obniżony poziom hałasu
          i efektywność energetyczna. Elektromobilność zmienia świat
          motoryzacji, a już niedługo zmieni także sposób planowania miast i ich
          infrastrukturę.
        </p>
      </Row>
    </article>
  );
};

export default Ladowarki;
