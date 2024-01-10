import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Error = () => {
  return (
    <>
      <Header />
      <main>
        <div className="error">
          <h1 className="error__title">404</h1>
          <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
          <a href="/" className="error__homeLink"> Retournez sur la page d'acceuil</a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Error;
