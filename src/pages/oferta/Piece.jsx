import React from "react";
import { Row } from "react-bootstrap";
import Piec1 from "../../assets/images/oferta/piec-banner.png";
import Piec2 from "../../assets/images/oferta/piec-banner-grosik.png";
import Logo from "../../assets/images/logo.png";

const Piece = () => {
  return (
    <article className="section container px-md-5 ">
      <Row className="mt-5 pt-5 px-md-5 text-center">
        <h2 className="section__title ">MODERN HOME SYSTEM</h2>
        <p className="section__description">
          <strong>PIEC JONOWY EVE</strong>
          JEST TO NAJBARDZIEJ PRZYSZŁOŚCIOWE ROZWIĄZANIE DOSTĘPNE JUŻ TERAZ!
        </p>
        <p className="section__description">
          <strong>PIEC JONOWY EVE</strong>
          JEST TO NAJBARDZIEJ PRZYSZŁOŚCIOWE ROZWIĄZANIE DOSTĘPNE JUŻ TERAZ!
        </p>
        <p className="section__description">
          JAKO PRODUCENT
          <strong>OFERUJEMY 10-LETNIĄ GWARANCJĘ</strong>Z MOŻLIWOŚCIĄ
          PRZEDŁUŻENIA. FIRMA ŚWIADCZY USŁUGI KOMPLEKSOWE OD AUDYTU AŻ PO MONTAŻ
          I OBSŁUGĘ POSPRZEDAŻOWĄ. CIESZ SIĘ
          <strong>EKOLOGICZNYM, INNOWACYJNYM I OSZCZĘDNYM PRODUKTEM.</strong>
        </p>
        <img src={Piec1} alt="" className="py-5" />
        <h3 className="section__title-centered">DLACZEGO NASZ PIEC?</h3>
        <h3 className="section__title-centered  ">JEDYNA TAKA TECHNOLOGIA</h3>
        <ul className="px-5 py-2 section__list-noDecoration">
          <li className="section__description">
            Technologia rozszczepiania cząsteczek cieczy na jony dodatnie i
            ujemne
          </li>
          <li className="section__description">
            Ogrzewanie przepływowo wody na bieżąco
          </li>
          <li className="section__description">Żywotność elektrod do 45 lat</li>
          <li className="section__description">Cicha praca</li>
          <li className="section__description">Zajmuje mało miejsca</li>
          <li className="section__description">Gwarancja w podstawie 10 lat</li>
          <li className="section__description">
            Możliwość wydłużenia gwarancji o kolejne 5 lat
          </li>
          <li className="section__description">
            Bufor 2 w 1 ( C.O. I C.W.U.) 300/500 l
          </li>
          <li className="section__description">Ogrzewanie akumulacyjne</li>
          <li className="section__description">
            Moduł grzewczy naszej produkcji
          </li>
          <li className="section__description">
            Płyn grzewczy wzmacniający przewodność prądu
          </li>
          <li className="section__description">
            Bezpieczna dla użytkowania konstrukcja pieca – rozdzielona
            hydraulika z elektryką
          </li>
          <li className="section__description">Mikrobufor </li>
        </ul>
        <h3 className="section__title-centered">
          {">> POBIERZ KARTE PRODUKTU <<"}
        </h3>
        <img src={Piec2} alt="" className="py-5" />
        <h3 className="section__title-centered">GŁÓWNE ZALETY</h3>
        <ul className="px-5 py-2 section__list-noDecoration">
          <li className="section__description">Nowoczesna technologia</li>
          <li className="section__description">
            Atrakcyjne ceny pieca z buforem
          </li>
          <li className="section__description">
            Niewielkie gabaryty instalacji
          </li>
          <li className="section__description">Cicha praca pieca</li>
          <li className="section__description">
            Ochrona środowiska – brak emisji spalin
          </li>
          <li className="section__description">
            Komfort – sterowanie przez Wi-Fi
          </li>
          <li className="section__description">
            Uniknięcie ryzyka zatrucia czadem
          </li>
          <li className="section__description">
            Możliwość skorzystania z dofinansowania
          </li>
          <li className="section__description">Czyste Powietrze</li>
          <li className="section__description">
            Kupno bezpośrednio od producenta z 10 letnią gwarancją
          </li>
          <li className="section__description">
            Oszczędność czasu – piec bezobsługowy
          </li>
          <li className="section__description">
            Akumulacyjne grzanie w taryfie G12W, dzięki czemu rachunki wychodzą
            taniej niż przy pompie ciepła
          </li>
          <li className="section__description">
            Bufor 2 W 1 w zależności od mocy pieca 300/500l
          </li>
          <li className="section__description">
            Bez strat energii – sprawność pieca 99,6%
          </li>
          <li className="section__description">
            Innowacyjna technologia zastosowania elektrod i stopu stali
            nierdzewnej
          </li>
        </ul>
        <img src={Piec1} alt="" className="py-5" />
        <h3 className="section__title-centered">NASZA KOMPLEKSOWA USŁUGA</h3>
        <ul className="px-5 py-2 section__list-noDecoration">
          <li className="section__description">
            Spotkanie z doradcą technicznym
          </li>
          <li className="section__description">
            Audyt – omówienie potrzeb klienta i możliwości montażu
          </li>
          <li className="section__description">Podpisanie umowy</li>
          <li className="section__description">Montaż</li>
          <li className="section__description">Obsługa posprzedażowa</li>
        </ul>
        <img src={Piec2} alt="" className="py-5" />
        <h3 className="section__title-centered">GWARANTUJEMY</h3>
        <ul className="px-5 py-2 section__list-noDecoration">
          <li className="section__description">Doradztwo techniczne</li>
          <li className="section__description">
            Obsługę na najwyższym poziomie
          </li>
          <li className="section__description">Nowoczesny produkt PREMIUM</li>
          <li className="section__description">
            Możliwość finansowania zakupu
          </li>
          <li className="section__description">
            Skorzystanie z możliwych dotacji – „CZYSTE POWIETRZE”
          </li>

          <li className="section__description">
            <img src={Logo} alt="" className="py-5" />
          </li>
        </ul>
        <h3 className="section__title-centered">O NAS</h3>
        <p className="section__description">
          Nasze wartości to
          <strong>szczerość, jakość i szybkość.</strong>
          Sprawdziliśmy wszystkich możliwych producentów paneli i wiemy co
          najlepsze i w co warto inwestować aby nie przepłacać.
        </p>
        <p className="section__description">
          W naszym interesie leży dobro Klienta oraz sprzedaż i montaż
          instalacji w taki sposób żeby pokrywały zapotrzebowanie na energię
          klienta w 100%. Działamy lokalnie, mamy wielu opiekunów instalacji na
          terenie całego kraju.
        </p>
        <p className="section__description">
          Załatwiamy wszelkie formalności związane z
          <strong>pozyskaniem finansowania oraz dofinansowań.</strong>O naszej
          jakości świadczy
          <strong>wyróżnienie RZETELNA FIRMA.</strong>
        </p>
        <p className="section__description">Zapraszamy do współpracy.</p>
        <h3 className="section__title-centered">Skontaktuj się z Nami</h3>
      </Row>
    </article>
  );
};

export default Piece;
