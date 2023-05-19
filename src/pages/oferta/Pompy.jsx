import React from "react";
import { Row } from "react-bootstrap";
import "../../styles/Oferta.scss";

const Pompy = () => {
  return (
    <article className="section container px-5 ">
      <Row className="mt-5 pt-5 px-md-5">
        <h2 className="section__title">Instalacja pompy ciepła</h2>
        <p className="section__description">
          Czy pompy ciepła są wymagające? Nie, bo działają w pełni
          automatycznie. Są też tanie w eksploatacji, a ich ceny przez ostatnie
          lata znacząco spadły, co spowodowało, że stały się realną konkurencją
          dla kotłów. Pompy ciepła to szczególne urządzenia grzewcze, ponieważ
          same nie wytwarzają ciepła, a jedynie umożliwiają pobranie go z
          otoczenia – ziemi, wody lub powietrza, w zależności od tego, jaki
          rodzaj pompy wybierzemy. Pobrane ciepło przekształcane jest w postać,
          którą można wykorzystać w budynku. Jest to system bardziej
          skomplikowany od kotła.
        </p>
      </Row>
      <Row className="mt-5  px-md-5">
        <h3 className="section__title-centered">
          Z czego składa się pompa ciepła:
        </h3>
        <ul className="px-5 py-2">
          <li className="section__description">
            źródło dolne, którym jest woda, ziemia lub powietrze, w zależności
            od tego, jaką opcję pompy wybierzemy do pobierania ciepła,
          </li>
          <li className="section__description">
            pompa, która czerpie ciepło z otoczenia i zmienia ją na użyteczną,
            czyli grzewczą postać,
          </li>
          <li className="section__description">
            źródło górne, którą jest instalacja grzewcza w pomieszczeniach.
            Najpopularniejszym ogrzewaniem jest to podłogowe, sufitowe i
            ścienne. Rzadziej są to tradycyjne grzejniki.
          </li>
        </ul>
        <h3 className="section__title-centered">Rodzaje pomp ciepła</h3>
        <ul className="px-5 py-2">
          <li className="section__description">
            gruntowe/z ziemi, jak wskazuje nazwa wykorzystują ciepło znajdujące
            się w ziemi, w Polsce jest to najpopularniejszy wybór i należy
            zaznaczyć, że świetnie dopasowany do warunków klimatycznych w naszym
            kraju.
          </li>
        </ul>
        <h3 className="section__title-centered">
          Instalacja pompy gruntowej może mieć następujące formy:
        </h3>
        <ol className="px-4 py-2">
          <li className="section__description">
            Kolektor poziomy – wężownice z rur, w których znajduje się płyn
            niezamarzający, są zakopane dość płytko, bo na 1-2 m, jednak na
            dużej powierzchni.
          </li>
          <li className="section__description">
            Sondy pionowe – pojedyncze pętle rur, które umieszczane są w
            odwiertach na głębokościach kilkudziesięciu metrów.
          </li>
          <li className="section__description">
            Kolektor pionowy – składa się z miedzianych rur, w których co prawda
            nie ma płynu niezamarzającego, ale jest czynnik chłodniczy pompy.
          </li>
        </ol>
        <p className="section__description">
          Grunt ma swoje zalety, m.in. stała, dodatnia temperatura w sezonie
          grzewczym. Warto wiedzieć, że nie jest ona równa na każdej głębokości,
          a rośnie właśnie wraz z głębokością. Zmiany temperatury związane z
          porami roku również są właściwie nieodczuwalne. Bez znaczenia jest to,
          jak wygląda grunt, czy jest obsadzony roślinami, utwardzony, czy
          zabudowany. Oczywiście to rozwiązanie nie jest pozbawione wad,
          wykonanie odwiertów nie jest tanie, bo niezbędny jest do tego
          specjalistyczny sprzęt, a wypełnienie odwiertów musi być staranne.
          Kolektory poziome są łatwiejsze do wykonania, gdyż wystarczająca jest
          do tego zwykła koparkospycharka. Minusem jest to, iż potrzebujemy do
          tego rozwiązania dużej działki (kilkaset metrów terenu), którego nie
          będziemy mogli obsadzić czy utwardzić. Zarówno deszcz, jak i promienie
          słoneczne muszą trafiać na cały teren bez ograniczeń, gdyż w
          przeciwnym razie zasoby ciepła nie będą w stanie odnowić się pomiędzy
          sezonami. Można zastosować dodatkowe funkcjonalności w postaci
          ułożenia pod kolektorem ziemnym drenażu rozsączającego przydomową
          oczyszczalnię ścieków albo odprowadzanie w te rejony wody z rynien.
          Trzeba pamiętać, że duża działka i rozbudowany kolektor to większe
          koszty, jednak nieprzemyślane oszczędności to nigdy nie jest dobre
          rozwiązanie, ponieważ zbyt małe źródło dolne nie pozwoli pompie
          działać prawidłowo. Zacznie się wyłączać, gdy tylko temperatura gruntu
          zbytnio się obniży. Grunt idealny to ten wilgotny i gliniasty, z
          suchego uzyskamy nawet do trzy razy mniej ciepła.
        </p>
        <p className="section__description">
          Koszt (minimalny) pompy gruntowej to ok. 20 tys. zł.
        </p>
        <ul className="px-5 py-2">
          <li className="section__description">
            wodne/z wody, niewiele działek posiada na tyle duże podziemne cieki,
            by można było brać pod uwagę ich eksploatowanie/wykorzystywanie. Co
            więcej bardzo często skład wody nie jest odpowiedni, bo duże ilości
            manganu, wapnia i żelaza powodują zapychanie się filtrów,
            wymienników ciepła oraz szybkie zamulenie studni zrzutowej, czego
            efektem będzie nieprzyjmowanie przez nią wody. Oczywiście można
            zastosować dodatkowy wymiennik ze stali szlachetnej, jednak powoduje
            to pogorszenie funkcjonowania całego układu. Co więcej, gdy trzeba
            czyścić wymiennik instalacja przestaje być bezobsługowa.
            Jednocześnie woda ma świetną zdolność akumulowania ciepła, z tego
            też powodu kolektor układany np. na dnie stawu może być kilkakrotnie
            mniejszy niż ten układany w gruncie.
          </li>
          <li className="section__description">
            z powietrza, na początku należy zaznaczyć, ze powietrze nie jest
            zbyt dobrym nośnikiem ciepła. Co więcej jego temperatura zmienia się
            znacznie częściej niż ta gruntowa i wodna. Jednak to właśnie pompy
            powietrza zyskują na coraz większej popularności i rozwijają się
            najszybciej. Ich niewątpliwym atutem jest to, że nie jest istotna
            ani wielkość działki, ani jej warunki. Powietrze jak dotąd nie jest
            ograniczone ani dostępowo, ani ilościowo. To bardzo dobra opcja dla
            tych, którzy nie chcą ingerować w otoczenie. Ten rodzaj pomp nie
            potrzebuje komina i nie wpływa na działanie wentylacji. Największą
            wadą tych pomp jest fakt, że temperatura powietrza zmienia się dość
            często, jednak nawet spadając do -20°C są one w stanie działać,
            tylko zdecydowanie mniej ekonomicznie. Im niższa temperatura tym
            więcej prądu zużyją, by wytworzyć więcej ciepła. Jednak
            zapotrzebowanie na ciepło są w stanie pokryć przez cały czas.
          </li>
        </ul>
        <h3 className="section__title-centered">
          Pompa samodzielna czy układ biwalentny?
        </h3>
        <p className="section__description">
          Kiedy konieczny jest układ biwalentny? W kilku przypadkach, gdy pompa
          nie może pracować samodzielnie przy dużym mrozie, gdy jej samodzielne
          działanie staje się nieekonomiczne i gdy pompa zasila grzejniki i nie
          jest w stanie podgrzać wody do wystarczającego dla nich poziomu. Do
          -7°C ogrzewanie zapewnia co prawda sama pompa, a poniżej tej
          temperatury wspomaga ją kocioł lub grzałki elektryczne. Bywa, że
          niektórzy decydują się też na rezerwowe źródło grzewcze, jakim jest
          np. kominek. Aktualnie najnowocześniejszym tego typu rozwiązaniem jest
          opcja hybrydowa, to zestaw z kotłem gazowym i pompą, która
          wykorzystuje powietrze zewnętrzne. W takiej opcji to automatyka układu
          decyduje kiedy pracuje pompa, a kiedy kocioł, uwzględniając w danym
          momencie sprawność obu urządzeń w konkretnych warunkach oraz cenę
          prądu i gazu. Skąd jednak wziąć ceny prądu czy gazu? Wystarczy, że w
          pamięci urządzenia będą wpisane ceny nośników energii, reszta wydarzy
          się automatycznie.
        </p>
        <h3 className="section__title-centered">
          Sposób ogrzewania pomieszczeń – jakie?
        </h3>
        <p className="section__description">
          Pierwszym wyborem powinno być ogrzewanie płaszczyznowe: podłogowe,
          ścienne lub sufitowe. Wariantów jest sporo, jednak najczęściej są to
          rurki zatopione w grubej (ok. 7 cm) warstwie wylewki podłogowej.
        </p>
        <p className="section__description-bold">
          Co zrobić, gdy grzejniki już są i nie mamy opcji zdecydować się na
          kapitalny remont? Możemy:
        </p>
        <ul className="px-5 py-2">
          <li className="section__description">
            wybrać pompę wysokotemperaturową, która jest w stanie podgrzać wodę
            nawet do 65°C, dla większości instalacji to wystarczające. Należy
            pamiętać, że maksymalna temperatura wody jest potrzebna tylko
            podczas największych mrozów,
          </li>
          <li className="section__description">
            wybrać układ biwalentny, w nim przy niskiej temperaturze zewnętrznej
            zasilanie grzejników przejmuje kocioł lub inne źródło ciepła,
          </li>
          <li className="section__description">
            założyć specjalny rodzaj grzejników, odpowiednio większych.
          </li>
        </ul>
        <p p className="section__description">
          Wskazane rozwiązania się nie wykluczają, a mogą się wzajemnie
          uzupełniać.
        </p>
        <h3 className="section__title-centered">Moc pompy ciepła – jaka?</h3>
        <p p className="section__description">
          Moc pompy ciepła jest zmienna i zależy od temperatury zarówno źródła
          dolnego, jak i górnego. Spada tym bardziej im większa jest różnica
          temperatury pomiędzy nimi, a duża różnica oznacza, że pompa musi
          wykonać większą pracę, co za tym idzie zużyje więcej prądu.
          Pamiętajmy, że moc pompy powinna znaleźć się w dokumentacji i samo
          podanie mocy pompy np. tylko dla temperatury zewnętrznej niewiele mówi
          o jej rzeczywistych możliwościach i jest swoistym wprowadzeniem w
          błąd.
        </p>
        <p p className="section__description">
          Pompy typu powietrze/woda, ich producenci deklarują utrzymanie mocy
          bez zmian do temperatury -15°C. Jednak znów co prawda moc tych pomp
          jest stała przy takiej temperaturze, ale sprawność maleje właśnie wraz
          z jej spadkiem. Urządzenie „da” zadeklarowaną temperaturę, więc nie
          musimy się martwić, że w domu będzie za zimno, bo temperatura zostanie
          utrzymana.
        </p>
        <h3 className="section__title-centered">Kiedy dobrać pompę?</h3>
        <p p className="section__description">
          Najlepszym rozwiązaniem jest dobranie pompy do dopiero co
          projektowanego domu, w takim przypadku mamy szansę wybrać jeden z
          wariantów odpowiadając na pytania:
        </p>
        <ul className="px-5 py-2">
          <li className="section__description">
            jakie jest zapotrzebowanie budynku na ciepło,
          </li>
          <li className="section__description">
            czy pompa ma być samodzielna czy w układzie biwalentnym,
          </li>
          <li className="section__description">
            jaka jest temperatura źródła dolnego i górnego.
          </li>
        </ul>
        <p p className="section__description">
          W przypadku, gdy dom już stoi możliwości są mniejsze, ale może warto
          np. docieplić budynek i kupić pompę o mniejszej mocy. To, o czym warto
          pomyśleć, to by nie oszczędzać na projekcie.
        </p>
        <h3 className="section__title-centered">Koszty instalacji:</h3>
        <p p className="section__description">
          Pompy ciepła to raczej droższa inwestycja w porównaniu do innych
          urządzeń grzewczych. Dobrą, markową pompę typu woda, powietrze możemy
          kupić za 20 tys. i w tych przypadkach nie ma już kosztu źródła
          dolnego. Różnice cen jednak są bardzo zróżnicowane. W przypadku pomp
          gruntowych to również cena ok. 20 tys., ale w tym przypadku niezbędna
          będzie jeszcze instalacja po stronie źrodła dolnego, a te zaczynają
          się od kilku tysięcy.
        </p>
        <p p className="section__description">
          Pompa ciepła z roku na rok staje się coraz popularniejszym
          rozwiązaniem w kwestii uzyskiwania ciepłej wody i ogrzewania domu.
          Jest to jeden z najoszczędniejszych, najbardziej efektywnych i
          ekologicznych sposobów uzyskiwania ciepła.
        </p>
        <h3 className="section__title-centered">Zalety pomp ciepła:</h3>
        <ul className="px-5 py-2">
          <li className="section__description">
            darmowa energia z gruntu, wody lub powietrza,
          </li>
          <li className="section__description">
            brak emisji zanieczyszczeń do środowiska,
          </li>
          <li className="section__description">
            skuteczne działanie nawet przy bardzo niskich temperaturach na
            zewnątrz,
          </li>
          <li className="section__description">
            możliwość kompilacji z instalacjami z ogrzewaniem podłogowym, jak
            również z grzejnikami o niskiej temperaturze zasilania,
          </li>
          <li className="section__description">
            doskonała jakość z długą żywotnością,
          </li>
          <li className="section__description">
            brak konieczności składowania paliwa,
          </li>
          <li className="section__description">
            podczas budowy domu zwalnia z konieczności budowy komina,
          </li>
          <li className="section__description">
            brak konieczności doprowadzania gazu na działkę,
          </li>
          <li className="section__description">łatwa obsługa.</li>
        </ul>
        <h3 className="section__title-centered">Z czego składa się pompa?</h3>
        <ul className="px-5 py-2">
          <li className="section__description">
            wymiennika, jego głównym zadaniem jest pozyskiwanie ciepła,
          </li>
          <li className="section__description">sprężarka,</li>
          <li className="section__description">
            wymiennik do oddawania ciepła,
          </li>
          <li className="section__description">zawór rozprężony.</li>
        </ul>
        <h3 className="section__title-centered">
          Mechanizm działania pompy ciepła
        </h3>
        <p className="section__description">
          W momencie, w którym gaz się rozpręża w otoczeniu dochodzi do
          pochłonięcia dużej ilości ciepła.
        </p>
        <p className="section__description">
          COP – określa stosunek ilości dostarczonego ciepła do ilości energii,
          która została zużyta w czasie pracy. Im współczynnik jest wyższy tym
          pompa jest tańsza w eksploatacji.
        </p>
        <p className="section__description">
          SCOP – określa stosunek energii cieplnej potrzebnej do ogrzania
          budynku do energii elektrycznej zużytej przez pompę w danym sezonie.
        </p>
        <h3 className="section__title-centered">
          Pompa ciepła, czy opłaca się ją instalować?
        </h3>
        <p className="section__description">
          Jest to dość duży koszt inwestycyjny. Jednak przyniesie spodziewane
          rezultaty, jeśli zostanie odpowiednio dobrana do specyfikacji budynku.
          Może być samodzielnym, głównym źródłem ogrzewania domu lub
          współpracować, współistnieć z dodatkowym urządzeniem np. kotłem
          gazowym, olejowym lub na paliwo stałe.
        </p>
        <p className="section__description-bold">
          Na co zwrócić uwagę przed podjęciem decyzji o montażu pompy?
        </p>
        <ol className="px-5 py-2">
          <li className="section__description">
            pompa ciepła może działać efektywnie wtedy, gdy już istniejący
            system grzewczy nie wymaga zbyt wysokiej temperatury zasilania.
            Pompa dobrze współpracuje z niskotemperaturowymi układami
            płaszyznowymi.{" "}
          </li>
          <li className="section__description">
            dom, w którym ma znaleźć się pompa ciepła powinien spełniać
            standardy budownictwa energooszczędnego, w przeciwnym wypadku jego
            wydajność może spadać.
          </li>
          <li className="section__description">
            przy niewielkiej działce najodpowiedniejsza będzie pompa typu
            powietrze lub woda.
          </li>
          <li className="section__description">
            montaż pompy będzie korzystny zarówno ze względów finansowych, jak i
            ekologicznych.
          </li>
          <li className="section__description">
            można połączyć pompę z już istniejącym urządzeniem grzewczym.
          </li>
          <li className="section__description">
            dla każdego budynku muszą zostać dobrane indywidualne rozwiązania w
            postaci projektu, odpowiednio dobranej mocy oraz analizy termicznej.
          </li>
          <li className="section__description">
            dla każdego budynku muszą zostać dobrane indywidualne rozwiązania w
            postaci projektu, odpowiednio dobranej mocy oraz analizy termicznej.
          </li>
          <li className="section__description">
            projekt instalacji powinien zostać przygotowany przez osobę z
            uprawnieniami budowlanymi w zakresie sieci, instalacji urządzeń
            grzewczych.
          </li>
        </ol>
        <h3 className="section__title-centered">Termomodernizacja – co to?</h3>
        <p className="section__description">
          Decyduje o doborze urządzenia (moc i wielkość), co określa koszt całej
          inwestycji. Im mniejsze będą straty ciepła tym szybciej zwrócą się
          koszty za pompę ciepła. Zapotrzebowanie na ciepło zależy od
          powierzchni, użytego do budowy ścian materiału, rozmieszczenia drzwi,
          okien itd. Obecne urządzenia maja duże czytelne wyświetlacze oraz
          estetyczną obudowę. Jedno jednak jest pewne, odpowiednio dobrane
          elementy pomagają osiągać optymalny efekt.
        </p>
        <p className="section__description">
          Jeśli masz jakiekolwiek pytania, zapraszamy do kontaktu, postaramy się
          na wszystkie wyczerpująco odpowiedzieć.
        </p>
      </Row>
    </article>
  );
};

export default Pompy;
