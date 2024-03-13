import { useState } from "react";

import "./App.css";

function App() {
  const [successMsg, setSuccessMsg] = useState("");

  // traitement envoie formulaire
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    // entrez api url ici
    const apiUrl = "http://localhost:3000/todos";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
      setSuccessMsg("Votre inscription a bien été prise en compte!");
    } catch (error) {
      console.log("une erreur est survenue", error);
    }
  };

  return (
    <>
      {successMsg && <p className="success-msg">{successMsg}</p>}
      <h1>Votre Formulaire ici!</h1>
      <form className="form-container" onSubmit={onFormSubmit}>
        <div className="inputs-grid">
          <label className="form-label" id="username">
            Nom d&apos;utilisateur :
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="votre nom"
            className="form-input"
          />
          <label className="form-label" id="password">
            Votre mot de passe :
          </label>
          <input
            type="password"
            name="password"
            placeholder="votre mot de passe"
            className="form-input"
            id="password"
          />
        </div>
        <button type="submit" className="form-submit">
          Envoyez!
        </button>
      </form>
    </>
  );
}

export default App;
