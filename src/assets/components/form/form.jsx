import "../form/form.scss";

function Form() {
  return (
    /* action : définit l'emplacement ou doivent 
    être envoyées les données */
    /* for : permet de lier un libellé à un élément formulaire */
    <form className="form" action="/ma-page-de-traitement" method="post">
      <ul>
        <li className="field">
          <label className="field-label" htmlFor="name">
            Nom
          </label>
          <input
            className="field-input"
            type="text"
            id="name"
            name="user_name"
          />
        </li>
        <li className="field">
          <label className="field-label" htmlFor="mail">
            E-mail
          </label>
          <input
            className="field-input"
            type="email"
            id="mail"
            name="user_mail"
          />
        </li>
        <li>
          <label htmlFor="msg">Message</label>
          <textarea
            id="msg"
            name="user_message"
            defaultValue="This is description"
          ></textarea>
        </li>
      </ul>
      <div className="button">
        <button type="submit">Envoyer le message</button>
      </div>
    </form>
  );
}

export default Form;
