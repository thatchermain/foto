import React from "react";
import { Row } from "react-bootstrap";
import "../../styles/Oferta.scss";
import Stat1 from "../../assets/images/oferta/stat1.png";
import Stat2 from "../../assets/images/oferta/stat2.png";
import { Link } from "react-router-dom";

const Instalacje = () => {
  return (
    <article className="section container px-5 ">
      <Row className="mt-5 pt-5 px-md-5">
        <h2 className="section__title">Instalacje fotowoltaiczne</h2>
        <p className="section__description">
          Fotowoltaika zajmuje się przetwarzaniem promieniowania światła
          słonecznego w energię elektryczną{" "}
          <strong>
            za pomocą ogniw fotowoltaicznych, z których stworzone są panele, w
            których zachodzi zjawisko fotowoltaiczne.
          </strong>
        </p>
        <p className="section__description">
          Fotowoltaika znajduje coraz większe zastosowanie z dwóch powodów:
        </p>
        <ul className="px-5">
          <li className="section__description">
            ekologicznego (gdy ma większe znaczenie niż ekonomia, a planeta
            potrzebuje coraz bardziej rozsądnych decyzji i świadomych wyborów),
          </li>
          <li className="section__description">
            praktycznego (promieniowanie słoneczne jest obecnie właściwie
            wszędzie, dlaczego więc go nie wykorzystywać).
          </li>
        </ul>
        <p className="section__description">
          Rozwiązanie wykorzystujące panele fotowoltaiczne to oszczędność i
          niezależność. Miesięczne rachunki za prąd przy takim rozwiązaniu
          wyniosą ok. 10-30 zł., okres całkowitego zwrotu inwestycji to ok. 7-9
          lat. Ceny energii wzrastają, więc opłacalność inwestycji będzie z
          czasem tylko rosnąć. Poza tym inwestując w panele pomagasz planecie i
          realnie inwestujesz w przyszłość swoich dzieci.
        </p>
      </Row>
      <Row className="mt-5  px-md-5">
        <h3 className="section__title-centered">Ile zapłacisz?</h3>
        <p className="section__description">
          Fotowoltaika nigdy nie była tańsza. W 2020 roku za każdy 1 kWp dobrej
          klasy instalacji zapłacisz średnio 4-6 tys. zł.
        </p>
        <p className="section__description">
          Wydajność instalacji fotowoltaicznej na przestrzeni roku w Polsce:
        </p>
        <img src={Stat1} alt="" className="section__img" />
        <p className="section__description">
          <strong className="pe-2">Rys 1.</strong>
          Przykładowa symulacja uzysków z instalacji 5,12 kW dla miejscowości
          Kraków w ekspozycji południowej przy pochyleniu połaci 30°
        </p>
        <p className="section__description">
          <strong>
            Ciekawostka: A tak prezentują się dla półkuli południowej:
          </strong>
        </p>
        <img src={Stat2} alt="" className="section__img" />
        <p className="section__description">
          <strong className="pe-2">Rys 2.</strong>
          Przykładowa symulacja uzysków z instalacji 5,12 kW dla miejscowości
          Sydney (Australia) w ekspozycji północnej przy pochyleniu połaci 30°
        </p>
        <h3 className="section__title-centered">
          Do podstawowych elementów instalacji fotowoltaicznej należą:
        </h3>
        <ul className="px-5 py-2">
          <li className="section__description">
            panele (moduły) fotowoltaiczne,
          </li>
          <li className="section__description">inwerter (falownik)</li>
          <li className="section__description">
            systemy mocowań na dachy skośne lub płaskie
          </li>
          <li className="section__description">konstrukcje naziemne</li>
        </ul>
        <p className="section__description">
          Występują one w różnych cenach, w zależności od marki, ale to, co jest
          ważne, to to, żeby nie wybierać najtańszych. Ich jakość wpływa na
          bezawaryjność i bezproblemową pracę systemu.
        </p>
        <p className="section__description">
          Poza panelami słonecznymi ważny jest inwerter, czyli falownik, który
          przekształca prąd stały powstający w fotoogniwach w prąd zmienny o
          parametrach elektrycznych zgodnych z parametrami sieci publicznej.
        </p>
        <p className="section__description">
          Konstrukcja montażowa również ma znaczenie, trzeba pamiętać, że
          największy wpływ na cenę systemu montażowego ma materiał, z którego
          jest wykonany. Najtańszy to stal ocynkowana, następnie nierdzewna, a
          najdroższą opcją jest aluminium. Największą wadą stali ocynkowanej
          jest to, że przy niewłaściwym montażu może wdać się rdza.
        </p>
        <h3 className="section__title-centered">
          Co jeszcze ma znaczenie? Instalator!
        </h3>
        <p className="section__description">
          Źle zamontowana instalacja powoduje usterki, może nie od razu, ale po
          kilku latach daje o sobie znać, może spowodować, że producent nie uzna
          gwarancji, a niewłaściwy montaż stanowi najczęstszą przyczynę usterek.
        </p>
        <h3 className="section__title-centered">
          Moc instalacji fotowoltaicznej
        </h3>
        <p className="section__description">
          Moc instalacji dobierana jest w odniesieniu do rocznego zużycia. 1kWp
          wyprodukuje rocznie jakieś 1000 kWh. Instalator oszacuje indywidualne
          zapotrzebowanie na energię.
        </p>
        <p className="section__description-bold">
          Orientacja dachu jako kluczowa sprawa:
        </p>
        <p className="section__description">
          Najważniejsza zasada brzmi: nie należy instalować paneli w kierunku
          północnym!
        </p>
        <p className="section__description">
          Optymalne ustawienie instalacji dachowej PV waha się od 20 do 40
          stopni.
        </p>
        <h3 className="section__title-centered">
          Na koszt inwestycyjny składa się:
        </h3>
        <ul className="px-5 py-2">
          <li className="section__description">
            przygotowanie projektu instalacji,
          </li>
          <li className="section__description">
            zakup modułów fotowoltaicznych (najdroższy element instalacji,
            wartość zależy od wielkości systemu, producenta oraz technologii w
            jakiej wyprodukowano panele),
          </li>
          <li className="section__description">
            zakup systemu montażowego i osprzętu elektrycznego
          </li>
          <li className="section__description">inwerter</li>
          <li className="section__description">montaż</li>
        </ul>
        <p className="section__description-bold">
          Dlaczego warto wybrać rozwiązanie fotowoltaiczne u nas?
        </p>
        <ul className="px-5 py-2">
          <li className="section__description">oszczędność czasu,</li>
          <li className="section__description">
            przygotowujemy gotowy projekt wraz z analizą produkcji energii i
            oszczędności,
          </li>
          <li className="section__description">
            wspieramy przez cały czas trwania inwestycji,
          </li>
          <li className="section__description">
            dostarczamy skonfigurowany system zarządzania energią,
          </li>
          <li className="section__description">
            stosujemy tylko sprawdzoną technologię i niskie koszty,
          </li>
          <li className="section__description">dbamy o środowisko.</li>
        </ul>
        <p className="section__description-bold">Proces inwestycyjny: </p>
        <ul className="px-5 py-2">
          <li className="section__description">
            konsultacja i złożenie oferty (sprawdzamy w jaki sposób możemy
            obniżyć koszty energii elektrycznej w twoim domu/firmie i czy możemy
            bezpiecznie zainstalować panele fotowoltaiczne),
          </li>
          <li className="section__description">podpisanie umowy,</li>
          <li className="section__description">
            wykonanie projektu i dokumentacji technicznej (etap doprecyzowania
            kwestii technicznych i merytorycznych),
          </li>
          <li className="section__description">
            pozyskanie finansowania (pomagamy w pozyskaniu finansowania),
          </li>
          <li className="section__description">
            budowa systemu fotowoltaicznego (czas trwania od kilku do kilkunastu
            dni),
          </li>
          <li className="section__description">
            podłączenie instalacji do sieci (wymagane jest złożenie dokumentów w
            Zakładzie Energetycznym, gotową dokumentację przekazuje nasz
            instalator).
          </li>
        </ul>
        <h3 className="section__title-centered">
          Fotowoltaika dla przedsiębiorców!
        </h3>
        <p className="section__description">
          Przedsiębiorco może nie wiesz, ale słońce sprawia, że każdy metr
          kwadratowy w ciągu całego roku pokrywany jest energią, która równa
          jest 1000 kWh. Bardzo ważnym aspektem przy
        </p>
        <p className="section__description">
          podejmowaniu decyzji w sprawie firmowej instalacji fotowoltaicznej
          jest to, że sytuacja prawna poprawia się, a ceny instalacji
          fotowoltaicznych w ostatnich latach znacząco zmalały.
        </p>
        <p className="section__description">
          Ceny „tradycyjnej” energii w Polsce będą rosły. Dlaczego? Ceny węgla
          będą się zwiększać ze względu na rosnące koszty surowca, koszty emisji
          CO2 i ze względu na niewywiązywanie się z umów międzynarodowych.
          Odwrotnie ma się sytuacja z cenami paneli słonecznych, które w ciągu
          ostatnich lat zmalały m.in. ze względu na zniesienie cła.
        </p>
        <h3 className="section__title-centered">Zarządzanie energią</h3>
        <p className="section__description">
          Spoglądając na zapisy z ustawy o OZE z 22.06.2016 r. wytwórcy prądu
          mogą zarządzać energią:
        </p>
        <ul className="px-5 py-2">
          <li className="section__description">
            magazynując ją jako prosument (producent i konsument w jednym), co
            oznacza, że 70% energii oddanej do sieci można w ciągu roku odebrać,
          </li>
          <li className="section__description">
            sprzedając, jednak stosunek mocy oddanej do pobranej jest w tej
            opcji mniej korzystny, tutaj firmy mogą odzyskać ok. 40% z
            produkowanego prądu, w tym przypadku należy unikać produkowania
            nadwyżek,
          </li>
          <li className="section__description">
            magazynując je w akumulatorach.
          </li>
        </ul>
        <h3 className="section__title-centered">
          Sprzedaż prądu przez firmy, czy się opłaca?
        </h3>
        <p className="section__description">
          Zanim odpowiemy sobie na to pytanie, trzeba mieć świadomość, że zakład
          sprzedający prąd sprzedaje tylko energie czynną. Natomiast gdy ją
          kupuje to w cenę poza prądem wlicza się energię czynną (ok. 40%),
          czyli prąd napędzający urządzenia elektryczne, ale również i przesył
          energii, jakość przesyłu, akcyzę (1%), VAT (23%) i opłaty stałe (ok.
          34%), tutaj mieszczą się m.in. koszty przesyłu energii, marża
          dystrybutora, opłata jakościowa. Firmom więc sprzedaż energii
          elektrycznej po prostu się nie opłaca.
        </p>
        <h3 className="section__title-centered">Jaka wielkość instalacji?</h3>
        <p className="section__description">
          W oparciu o parametry mocy systemu (zgodnie z nowelizacją z 2018 r.):
        </p>
        <ul className="px-5 py-2">
          <li className="section__description">
            do 50 kWp (mikroinstalacja), brak kosztu przyłączenia i rozliczenia,
          </li>
          <li className="section__description">
            50-500kWp (mała instalacja), koszt przyłączenia dzielony jest
            pomiędzy inwestora a energetykę,
          </li>
          <li className="section__description">
            500 kWp-1MWp (średnia instalacja), wymagana koncesja,
          </li>
          <li className="section__description">
            powyżej 1 MWp (duża instalacja), wymagana koncesja.
          </li>
        </ul>
        <p className="section__description">
          Dla większości firm odpowiednia będzie mała instalacja.
        </p>
        <h3 className="section__title-centered">DOFINANSOWANIE</h3>
        <p className="section__description-bold">
          Sposoby finansowania systemów fotowoltaicznych:
        </p>
        <ul className="px-5 py-2">
          <li className="section__description">
            gotówka: finansowane z własnych środków, dostępne dla każdego.
          </li>
          <li className="section__description">
            kredyt: dedykowany osobom fizycznym. Idealne rozwiązanie, gdy nie
            chcemy czekać na otrzymanie dotacji, a jednak zależy nam na
            dogodnych warunkach
          </li>
          <li className="section__description">
            leasing: skierowany wyłącznie do właścicieli firm. Uproszczona
            procedura i całkowite minimum formalności. Jedyne czego potrzebujesz
            do jego uruchomienia to dokumenty ewidencyjne oraz finansowe firmy.
            Nie jest wymagane posiadanie jakiegokolwiek zabezpieczenia, a czas
            oczekiwania na decyzję jest krótki.
          </li>
        </ul>
        <p className="section__description-bold">
          Korzyści wynikające z leasingowania instalacji fotowoltaicznej:
        </p>
        <ul className="px-5 py-2">
          <li className="section__description">
            środki firmy nie są angażowane,
          </li>
          <li className="section__description">
            system fotowoltaiczny sam na siebie zarabia,
          </li>
          <li className="section__description">
            w pakiecie liczne ulgi podatkowe,
          </li>
          <li className="section__description">
            leasing operacyjny systemu fotowoltaicznego zaliczany jest do
            majątku leasingodawcy,
          </li>
          <li className="section__description">rozliczanie VAT-u.</li>
        </ul>
        <h3 className="section__title-centered">ULGA TERMOMODERNIZACYJNA</h3>
        <p className="section__description">
          Skierowana jest jedynie do właścicieli i współwłaścicieli budynków
          mieszkalnych jednorodzinnych. Przysługuje na poniesione przez
          podatnika wydatki pod warunkiem, że przedsięwzięcie zakończone
          zostanie w okresie 3 kolejnych lat (licząc od końca roku podatkowego,
          w którym to poniesiony został pierwszy wydatek). Omawiane odliczenie
          nie przysługuje podatnikowi, który nie ma tytułu prawnego
          informującego o jego własności do nieruchomości, a jest jedynie
          posiadaczem.
        </p>
        <p className="section__description">
          Budynek mieszkalny jednorodzinny to: budynek wolnostojący, w zabudowie
          bliźniaczej, szeregowej lub grupowej, który służy zaspokajaniu potrzeb
          mieszkaniowych o konstrukcyjnie samodzielnej całości.
        </p>
        <p className="section__description-bold">
          Dla kogo ulga termomodernizacyjna?
        </p>
        <p className="section__description">
          Z możliwości odliczenia skorzystać mogą podatnicy:
        </p>

        <ul className="px-5 py-2">
          <li className="section__description">
            opodatkowujący swoje dochody według skali podatkowej,
          </li>
          <li className="section__description">
            opodatkowujący swoje dochody według jednolitej 19% stawki,
          </li>
          <li className="section__description">
            opłacający ryczałt od przychodów ewidencjonowanych.
          </li>
        </ul>

        <h3 className="section__title-centered">PROGRAM MÓJ PRĄD</h3>
        <p className="section__description">
          Wspiera rozwój segmentu mikro-instalacji fotowoltaicznych. Celem
          programu jest zwiększenie produkcji energii elektrycznej z
          mikro-instalacji fotowoltaicznych.
        </p>
        <p className="section__description-bold">Dla kogo?</p>
        <p className="section__description">
          Dla osób fizycznych wytwarzających energię elektryczną na własny
          użytek.
        </p>
        <p className="section__description">
          Dofinansowanie – dotacja do 50% kosztów kwalifikowanych
          mikro-instalacji, która wchodzi w skład przedsięwzięcia, jednak nie
          więcej niż 5 tys. zł. na jedno przedsięwzięcie.
        </p>
        <p className="section__description">
          Jeśli mamy przygotować nieodpłatną ofertę prosimy o wypełnienie i
          wysłanie formularza, a my się skontaktujemy.
        </p>
        <p className="section__description">
          Wykonujemy instalacje fotowoltaiczne w takich obszarach jak:
        </p>
        <ul className="px-5 py-2">
          <li className="section__description">
            <Link className="section__description-link">Małopolska</Link> (w tym{" "}
            <Link className="section__description-link">Kraków</Link>,{" "}
            <Link className="section__description-link">Tarnów</Link> )
          </li>
          <li className="section__description">
            <Link className="section__description-link">Dolnośląskie</Link> (w
            tym <Link className="section__description-link">Wrocław</Link>, )
          </li>
          <li className="section__description">
            <Link className="section__description-link">
              Kujawsko-Pomorskie
            </Link>
          </li>
          <li className="section__description">
            <Link className="section__description-link">Łódzkie</Link>
          </li>
          <li className="section__description">
            <Link className="section__description-link">Lubelskie</Link>
          </li>
          <li className="section__description">
            <Link className="section__description-link">Mazowieckie</Link>
          </li>
          <li className="section__description">
            <Link className="section__description-link">Opolskie</Link>
          </li>
          <li className="section__description">
            <Link className="section__description-link">Podkarpackie</Link>
          </li>
          <li className="section__description">
            <Link className="section__description-link">Podlaskie</Link>
          </li>
          <li className="section__description">
            <Link className="section__description-link">Pomorskie</Link>
          </li>
          <li className="section__description">
            <Link className="section__description-link">Śląskie</Link>
          </li>
          <li className="section__description">
            <Link className="section__description-link">Świętokrzyskie</Link>
          </li>
          <li className="section__description">
            <Link className="section__description-link">
              Warmińsko-Mazurskie
            </Link>
          </li>
          <li className="section__description">
            <Link className="section__description-link">
              Zachodniopomorskie
            </Link>
          </li>
          <li className="section__description">
            Więcej na stronie:{" "}
            <Link className="section__description-link">Gdzie działamy</Link>
          </li>
        </ul>
      </Row>
    </article>
  );
};

export default Instalacje;
