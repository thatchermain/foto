import React from "react";
import "../styles/Form.scss";

const Form = () => {
  return (
    <div>
      <form className="form">
        <h4 className="form__h4">
          Planujesz zainwestować w Instalację fotowoltaiczną?
        </h4>
        <p className="form__paragraph">
          Skontaktuj się z doradcą Solektro aby otrzymać darmową wycenę
          instalacji. Nasi specjaliści chętnie odpowiedzą na wszystkie pytania
          dotyczące aspektów formalnych, prawnych, a także technicznych Twojej
          przyszłej instalacji.
        </p>
        <div className="personal_data">
          <input type="text" className="form_field" placeholder="Podaj imię" />
          <input
            type="text"
            className="form_field"
            placeholder="Podaj nazwisko"
          />
        </div>
        <input
          type="text"
          className="form_field"
          placeholder="Numer telefonu"
        />
        <input type="text" className="form_field" placeholder="Email" />
        <select className="form_field">
          <option value="" disabled selected="selected">
            Wybierz województwo
          </option>
          <option value="Dolnośląskie">Dolnośląskie</option>
          <option value="Kujawsko-Pomorskie">Kujawsko-Pomorskie</option>
          <option value="Lubelskie">Lubelskie</option>
          <option value="Lubuskie">Lubuskie</option>
          <option value="Łódzkie">Łódzkie</option>
          <option value="Małopolskie">Małopolskie</option>
          <option value="Mazowieckie">Mazowieckie</option>
          <option value="Opolskie">Opolskie</option>
          <option value="Podkarpackie">Podkarpackie</option>
          <option value="Podlaskie">Podlaskie</option>
          <option value="Pomorskie">Pomorskie</option>
          <option value="Śląskie">Śląskie</option>
          <option value="Świętokrzystkie">Świętokrzystkie</option>
          <option value="Warmińsko-mazurskie">Warmińsko-mazurskie</option>
          <option value="Zachodnio-pomorskie">Zachodnio-pomorskie</option>
        </select>
        <select className="form_field">
          <option value="" disabled selected="selected">
            Wybierz usługę
          </option>
          <option value="Instalacje fotowoltaiczne">
            Instalacje fotowoltaiczne
          </option>
          <option value="Klimatyzacje">Klimatyzacje</option>
          <option value="Pompy ciepła">Pompy ciepła</option>
        </select>
        <textarea
          className="form_field"
          name=""
          id=""
          cols="50"
          rows="3"
          placeholder="Dodatkowe uwagi..."
        ></textarea>
        <fieldset className="form_contact_type">
          <p>
            Preferowany kontakt <span className="form_span">*</span>
          </p>
          <div className="form_contact_type_option">
            <input
              type="radio"
              name="Kontakt"
              id="Kontakt telefoniczny"
              value="Kontakt telefoniczny"
              checked
            />
            <label className="px-2 py-1" htmlFor="Kontakt telefoniczny">
              Kontakt telefoniczny
            </label>
          </div>

          <div className="form_contact_type_option">
            <input
              type="radio"
              name="Kontakt"
              id="Kontakt mailowy"
              value="Kontakt mailowy"
            />
            <label className="px-2" htmlFor="Kontakt mailowy">
              Kontakt mailowy
            </label>
          </div>
        </fieldset>
        <button className="btn">Wyślij formularz</button>
      </form>
    </div>
  );
};

export default Form;
