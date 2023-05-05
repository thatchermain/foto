import React from "react";
import Form from "../components/Form";
import "../styles/Home.scss";
import { Col, Row } from "react-bootstrap";
import Home1 from "../assets/images/home1.png";
import Instalacje from "../assets/images/oferta/instalacje.jpg";
import Pompy from "../assets/images/oferta/pompy.jpg";
import Piece from "../assets/images/oferta/piece.png";
import Ladowarki from "../assets/images/oferta/ladowarki.png";
import Magazyny from "../assets/images/oferta/magazyny.png";
import Sprzedaz from "../assets/images/oferta/sprzedaz.png";
import Blogowy from "../assets/images/blogowy.png";
import Blog1 from "../assets/images/blog1.png";
import Blog2 from "../assets/images/blog2.png";
import Blog3 from "../assets/images/blog3.png";
import Blog4 from "../assets/images/blog4.png";
import Blog5 from "../assets/images/blog5.png";
import Blog6 from "../assets/images/blog6.png";
import Blog7 from "../assets/images/blog7.png";
import { Link } from "react-router-dom";
import SimpleSlider from "../components/Slider/SimpleSlider";
import LogoSlider from "../components/Slider/LogoSlider";
import opinions from "../data/opinions";
import { BsPerson } from "react-icons/bs";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { AiOutlineClockCircle } from "react-icons/ai";
import partners from "../data/partners";

const Home = () => {
  return (
    <div className="div">
      <header className="header container-fluid">
        <div className="form_wrapper">
          <Form />
        </div>
      </header>

      {/*////////////////////// ARTICLE 1 */}

      <article className="container pt-5">
        <Row className="pt-5   ">
          <Col lg={6} md={12} className="flex-end pt-5 px-4">
            <div className="image_wrapper">
              <img src={Home1} alt="" />
            </div>
          </Col>
          <Col lg={6} md={12} className="pt-5 px-4">
            <h4 className="article_h4">CZYM SIĘ WYRÓŻNIAMY</h4>
            <h2 className="article_h2">Jesteśmy gotowi na każde wyzwanie.</h2>

            <p className="article_paragraph">
              Nasze wartości to szczerość, jakość i szybkość. Sprawdziliśmy
              wszystkich możliwych producentów paneli i wiemy co najlepsze i w
              co warto inwestować aby nie przepłacać.
            </p>
            <p className="article_paragraph">
              W naszym interesie leży dobro Klienta oraz sprzedaż i montaż
              instalacji w taki sposób żeby pokrywały zapotrzebowanie na energię
              klienta w 100%. Działamy lokalnie, mamy wielu opiekunów instalacji
              na terenie całego kraju.
            </p>
            <p className="article_paragraph">
              Załatwiamy wszelkie formalności związane z pozyskaniem
              finansowania oraz dofinansowań. O naszej jakości świadczy
              wyróżnienie RZETELNA FIRMA.
            </p>
            <p className="article_paragraph">
              Jeśli zależy Ci na tym aby nie zawieść się na instalacji
              fotowoltaicznej, zamów rozmowę z konsultantem.
            </p>
            <br />
            <button className="main_btn">Poznaj Nas </button>
          </Col>
        </Row>
      </article>

      {/*////////////////////// ARTICLE 2 */}

      <article className="container pt-5">
        <Row className="text-center pt-5">
          <div className="article_h4">MAMY NAJLEPSZĄ OFERTĘ</div>
          <div className="article_h2">Co znajdziesz w naszej ofercie?</div>

          <div className="article_paragraph pb-5">
            W ofercie Solektro łączymy nowoczesne technologie i myśli techniczne
            dla najlepszego wykorzystania naturalnej energii. W naszej ofercie
            znajdziesz najlepsze panele fotowoltaiczne, inwentery, systemy
            montażowe, pompy ciepła, kotły elektryczne oraz klimatyzatory.
          </div>
        </Row>
        <Row lg={3} md={2} xs={1} className=" py-5 gy-4 px-5 ">
          <Col className="">
            <div className="image_wrapper image_wrapper__offer">
              <Link>
                <img src={Instalacje} alt="" />
                <p
                  className="overlay"
                  data-text="Instalacje fotowoltaiczne"
                ></p>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="image_wrapper image_wrapper__offer">
              <Link>
                <img src={Pompy} alt="" />
                <p className="overlay" data-text="Pompy ciepła"></p>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="image_wrapper image_wrapper__offer">
              <Link>
                <img src={Piece} alt="" />
                <p className="overlay" data-text="Piece jonowe"></p>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="image_wrapper image_wrapper__offer">
              <Link>
                <img src={Ladowarki} alt="" />
                <p className="overlay" data-text="Ładowarki samochodowe"></p>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="image_wrapper image_wrapper__offer">
              <Link>
                <img src={Magazyny} alt="" />
                <p className="overlay" data-text="Magazyny energii"></p>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="image_wrapper image_wrapper__offer">
              <Link>
                <img src={Sprzedaz} alt="" />
                <p className="overlay" data-text="Sprzedaż energii"></p>
              </Link>
            </div>
          </Col>
        </Row>
      </article>

      {/*////////////////////// ARTICLE 3 */}

      <section className="container-fluid article_dark-bg">
        <article className="container pt-5 ">
          <Row className="text-center pt-5">
            <div className="article_h4">JAK PŁACIĆ MNIEJ ZA PRĄD?</div>
            <div className="article_h2 article_h2__on-dark-bg">
              Twoja własna elektrownia słoneczna w 6 krokach
            </div>

            <div className="article_paragraph article_paragraph__on-dark-bg pb-5">
              Nasze instalacje fotowoltaiczne realizujemy kompleksowo przy
              zachowaniu minimum formalności dla klienta. Wystarczy, że
              zadzwonisz lub zostawisz nam swój numer, a nasi specjaliści zajmą
              się całą resztą – prosto, szybko i skutecznie.
            </div>
          </Row>
          <Row className="steps mt-5">
            <Row className="py-5">
              <Col
                className="mx-lg-5  ps-sm-5 "
                lg={{ span: 5, order: 1 }}
                xs={{ span: 10, order: 2 }}
              >
                <div className="step_wrapper text-lg-end">
                  <h3 className="step_title">DARMOWA KONSULTACJA</h3>
                  <p className="step_info">
                    Wypełnij formularz kontaktowy lub zadzwoń. Ustalimy dogodny
                    dla Ciebie termin spotkania z naszym ekspertem.
                  </p>
                </div>
              </Col>

              <Col
                className="ps-lg-0 ms-lg-0 "
                lg={{ span: 5, order: 2 }}
                xs={{ span: 2, order: 1 }}
              >
                <div className="step_icon step_icon__arm step_icon__arm__left"></div>
              </Col>
            </Row>
            <Row className="py-5">
              <Col
                className="ps-lg-0 ms-lg-0 "
                lg={{ span: 5, offset: 4 }}
                xs={{ span: 0, order: 0 }}
              ></Col>
              <Col
                className="ps-lg-0 ms-lg-5 "
                lg={{ span: 1, offset: 5 }}
                xs={{ span: 2, order: 1 }}
              >
                <div className="step_icon ms-lg-5 step_icon__arm step_icon__arm__right"></div>
              </Col>

              <Col
                className="ms-0  ps-sm-5 "
                lg={{ span: 5, offset: 5, order: 1 }}
                xs={{ span: 10, order: 2 }}
              >
                <div className="step_wrapper">
                  <h3 className="step_title">BEZPŁATNY AUDYT</h3>
                  <p className="step_info">
                    Nasz ekspert przyjedzie do Twojego domu, przeprowadzi
                    bezpłatny audyt, dokona pomiarów dla przygotowania projektu
                    instalacji i jej wyceny. Doradca z przyjemnością odpowie na
                    wszystkie Twoje pytania i rozwieje wszelkie wątpliwości
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="py-5">
              <Col
                className="mx-lg-5  ps-sm-5 "
                lg={{ span: 5, order: 1 }}
                xs={{ span: 10, order: 2 }}
              >
                <div className="step_wrapper text-lg-end">
                  <h3 className="step_title">UMOWA I FINANSOWANIE</h3>
                  <p className="step_info">
                    Na kolejnym spotkaniu możesz już podpisać umowę. Pomożemy Ci
                    w uzyskaniu kredytu z wszystkimi pozostałymi formalnościami,
                    bez wychodzenia z domu. Załatwimy wszystko za Ciebie.
                  </p>
                </div>
              </Col>
              <Col
                className="ps-lg-0 ms-lg-0 "
                lg={{ span: 5, order: 2 }}
                xs={{ span: 2, order: 1 }}
              >
                <div className="step_icon step_icon__arm step_icon__arm__left"></div>
              </Col>
            </Row>
            <Row className="py-5">
              <Col
                className="ps-lg-0 ms-lg-0 "
                lg={{ span: 5, offset: 4 }}
                xs={{ span: 0, order: 0 }}
              ></Col>
              <Col
                className="ps-lg-0 ms-lg-5 "
                lg={{ span: 1, offset: 5 }}
                xs={{ span: 2, order: 1 }}
              >
                <div className="step_icon ms-lg-5 step_icon__arm step_icon__arm__right"></div>
              </Col>

              <Col
                className="ms-0  ps-sm-5 "
                lg={{ span: 5, offset: 5, order: 1 }}
                xs={{ span: 10, order: 2 }}
              >
                <div className="step_wrapper">
                  <h3 className="step_title">MONTAŻ I URUCHOMIENIE</h3>
                  <p className="step_info">
                    Nasi instalatorzy przeprowadzą montaż w 1-3 dni. Następnie
                    złożymy w Twoim imieniu zgłoszenie instalacji
                    fotowoltaicznej do Operatora Systemu Dystrybucji. Twoja
                    instalacja zostanie również uzgodniona z rzeczoznawcą ppoż.
                    W ciągu 30 dni licznik energii elektrycznej zostanie
                    wymieniony na dwukierunkowy a Ty będziesz cieszyć się
                    darmowym prądem ze słońca
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="py-5">
              <Col
                className="mx-lg-5  ps-sm-5 "
                lg={{ span: 5, order: 1 }}
                xs={{ span: 10, order: 2 }}
              >
                <div className="step_wrapper text-lg-end">
                  <h3 className="step_title">DOFINANSOWANIE</h3>
                  <p className="step_info">
                    Wskażemy Ci aktualne formy dofinansowania , z których możesz
                    skorzystać. Pomożemy Ci wypełnić i złożyć wnioski o dotację
                    np. rządowego programu Mój Prąd . Obecnie możesz również
                    skorzystać z ulgi termomodernizacyjnej.
                  </p>
                </div>
              </Col>

              <Col
                className="ps-lg-0 ms-lg-0 "
                lg={{ span: 5, order: 2 }}
                xs={{ span: 2, order: 1 }}
              >
                <div className="step_icon step_icon__arm step_icon__arm__left"></div>
              </Col>
            </Row>
            <Row className="py-5">
              <Col
                className="ps-lg-0 ms-lg-0 "
                lg={{ span: 5, offset: 4 }}
                xs={{ span: 0, order: 0 }}
              ></Col>
              <Col
                className="ps-lg-0 ms-lg-5 "
                lg={{ span: 1, offset: 5 }}
                xs={{ span: 2, order: 1 }}
              >
                <div className="step_icon ms-lg-5 step_icon__arm step_icon__arm__right"></div>
              </Col>

              <Col
                className="ms-0  ps-sm-5 "
                lg={{ span: 5, offset: 5, order: 1 }}
                xs={{ span: 10, order: 2 }}
              >
                <div className="step_wrapper">
                  <h3 className="step_title">OPIEKA I GWARANCJA</h3>
                  <p className="step_info">
                    Instalacja Fotowoltaiczna to inwestycja na lata. Przez cały
                    ten czas Twoja instalacja będzie monitorowana a Tobie
                    pozostanie wyłącznie cieszyć się z niższych rachunków za
                    energię elektryczną.
                  </p>
                </div>
              </Col>
            </Row>
          </Row>
        </article>
      </section>

      {/*////////////////////// ARTICLE 4 */}

      <article className="container pt-5">
        <Row className="text-center pt-5">
          <div className="article_h4">BEZPŁATNIE DORADZAMY NASZYM KLIENTOM</div>
          <div className="article_h2">
            Najnowsze aktualności na naszym blogu
          </div>

          <div className="article_paragraph pb-5 px-5">
            Chcesz dowiedzieć się więcej o instalacjach fotowoltaicznych i
            naturalnej energii? Na naszym blogu znajdziesz ważne aktualności
            branżowe, niezbędne informacje techniczne, porady i ciekawostki,
            które warto znać jeśli planuje się swoją własną elektrownie
            słoneczną i interesuję się tematyką odnawialnych źródeł energii.
          </div>
        </Row>
        <Row>
          <Col lg={6} className=" pb-5">
            <Link className="main-article">
              <div className="main-article__img">
                <img src={Blogowy} alt="" />
              </div>
              <div className="main-article__description p-5">
                <h4 className="main-article-blog main-article-blog__title">
                  Czym najtaniej ogrzać dom?
                </h4>
                <span className="main-article-blog main-article-blog__span py-2">
                  Blog * 3 października 2022
                </span>
                <p className="main-article-blog main-article-blog__short-info">
                  Czym najtaniej ogrzać dom? W ciągu ostatniego 1,5 roku ceny
                  węgla poszły w górę aż o 229%, natomiast pelletu o 166% – to
                  bardzo dużo. Dlatego też Polski Alarm Smogowy…
                </p>
              </div>
            </Link>
          </Col>
          <Col lg={6}>
            <div className="side-articles">
              <div className="side-article pb-3">
                <div className="side-article__img">
                  <img src={Blog1} alt="" />
                </div>
                <div className="side-article__info">
                  <p>Kryzys energetyczny a czas grzewczy!</p>
                  <span>Blog * 22 września 2022</span>
                </div>
              </div>
              <div className="side-article pb-3">
                <div className="side-article__img">
                  <img src={Blog2} alt="" />
                </div>
                <div className="side-article__info">
                  <p>Falownik – ile lat bez usterek?</p>
                  <span>Blog * 30 sierpnia 2022</span>
                </div>
              </div>
              <div className="side-article pb-3">
                <div className="side-article__img">
                  <img src={Blog3} alt="" />
                </div>
                <div className="side-article__info">
                  <p>
                    Ceny zmienne za prąd – rozliczenie przyszłości czy
                    teraźniejszości?
                  </p>
                  <span>Blog * 16 sierpnia 2022</span>
                </div>
              </div>
              <div className="side-article pb-3">
                <div className="side-article__img">
                  <img src={Blog4} alt="" />
                </div>
                <div className="side-article__info">
                  <p>Zmniejszenie zużycia gazu w Europie o 15%?</p>
                  <span>Blog * 8 sierpnia 2022</span>
                </div>
              </div>
              <div className="side-article pb-3">
                <div className="side-article__img">
                  <img src={Blog5} alt="" />
                </div>
                <div className="side-article__info">
                  <p>Google stawia na OZE!</p>
                  <span>Blog * 22 lipca 2022</span>
                </div>
              </div>
              <div className="side-article pb-3">
                <div className="side-article__img">
                  <img src={Blog6} alt="" />
                </div>
                <div className="side-article__info">
                  <p>Elektromobilność – zwiększanie zasięgu!</p>
                  <span>Blog * 12 lipca 2022</span>
                </div>
              </div>
              <div className="side-article pb-3">
                <div className="side-article__img">
                  <img src={Blog7} alt="" />
                </div>
                <div className="side-article__info">
                  <p>Podatki a zmiany w zasadach rozliczania prosumentów!</p>
                  <span>Blog * 7 lipca 2022</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <button className="blog-btn main_btn my-5">
            Odwiedź naszego bloga
          </button>
        </Row>
      </article>

      {/* //////////////////Kontakt baner */}

      <Row className="contact__wrapper container-fluid">
        <Row className="contact_banner container">
          <Col
            lg={{ span: 1, offset: 1 }}
            className="contact_banner__icon "
          ></Col>
          <Col lg={{ span: 5 }} className="contact_banner__text ps-5">
            <div className="contact_banner__text-small">
              SKONTAKTUJ SIĘ Z NAMI
            </div>
            <div className="contact_banner__text-big">
              Nie czekaj! Otrzymaj darmową wycenę instalacji fotowoltaicznej.
            </div>
          </Col>
          <Col lg={3} className=" d-flex ">
            <button className="contact_banner__btn main_btn contact_btn">
              Poproś o darmową wycenę
            </button>
          </Col>
        </Row>
      </Row>

      {/*////////////////////// ARTICLE 5 */}

      <article className="container py-5">
        <Row className=" text-center py-5">
          <div className="article_h4">OPINIE NASZYCH KLIENTÓW</div>
          <div className="article_h2">
            Poznaj referencje zadowolonych klientów
          </div>

          <div className="article_paragraph pb-5">
            Opinie naszych zadowolonych klientów są naszą najlepszą wizytówką.
            Możemy się poszczycić bardzo dobrymi ocenami a to jest bardzo
            istotne przy wyborze instalatora elektrowni słonecznej. Zaufaj nam i
            Ty, przekonasz się, ze to najlepszy wybór.
          </div>
        </Row>
        <Row className="pb-5">
          <SimpleSlider>
            {opinions.map((item) => {
              return (
                <div className=" opinion opinion__wrapper">
                  <p className="opinion__text">{item.text}</p>
                  <p className="opinion__name">{item.name}</p>
                  <p className="opinion__instalation">{item.instalation}</p>
                </div>
              );
            })}
          </SimpleSlider>
        </Row>
      </article>

      {/* //////////////////Dark baner */}
      <div className="dark-banner pt-5 mt-5">
        <Row className="container m-auto py-5">
          <Col className="dark-banner__item">
            <p className="dark-banner__icon">
              <BsPerson />
            </p>
            <div className="dark-banner__info">
              <div className="dark-banner__info-title">Doświadczony zespół</div>
              <p className="dark-banner__info-text">
                Wykwalifikowani handlowcy oraz monterzy sprostają każdemu
                wyzwaniu.
              </p>
            </div>
          </Col>
          <Col className="dark-banner__item">
            <div className="dark-banner__icon">
              <HiOutlineChatBubbleLeftEllipsis />
            </div>
            <div className="dark-banner__info">
              <p className="dark-banner__info-title">Profesjonalne doradztwo</p>
              <p className="dark-banner__info-text">
                Pomożemy Ci w podjęciu decyzji. Odpowiemy na wszystkie pytania.
              </p>
            </div>
          </Col>
          <Col className="dark-banner__item">
            <div className="dark-banner__icon">
              <AiOutlineClockCircle />
            </div>
            <div className="dark-banner__info">
              <p className="dark-banner__info-title">
                15 lat wsparcia technicznego
              </p>
              <p className="dark-banner__info-text">
                Monitorujemy i naprawiamy występujące szkody.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/* //////////////////Partnerzy */}

      <article className="container-fluid py-5">
        <Row className=" text-center py-5">
          <div className="article_h4">NASI PARTNERZY</div>
          <div className="article_h2">
            Najlepsi partnerzy to klucz do sukcesu
          </div>
        </Row>
        <div className="logo-slider m-auto pb-5 ">
          <LogoSlider>
            {partners.map((item) => {
              return (
                <Col className="partner__wrapper">
                  <img src={item.src} alt="" className="partner__logo" />
                </Col>
              );
            })}
          </LogoSlider>
        </div>
        <Row className="promo container text-center py-5 mt-2 m-auto">
          <p className="promo__text">
            <span>
              <Link className="promo__link">Regulamin</Link>
            </span>{" "}
            Akcji Promocyjnej „GROSIKOWE – AKCJA POLECAJĄCA”
          </p>
          <p className="promo__text">
            <span>
              <Link className="promo__link">Regulamin</Link>
            </span>{" "}
            Konkursu na Facebook – „Wygraj 10x piłkę z autografem Kamila
            Grosickiego”
          </p>
        </Row>
      </article>
    </div>
  );
};

export default Home;
