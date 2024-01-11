import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Error from "../../components/error/Error";

const Logements = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [logement, setLogement] = useState();
  const [isError404, setIsError404] = useState(false);

  useEffect(() => {
    // Récupérer le logement qui correspond à l'id et le mettre dans un state
    axios.get("/logements.jsx").then((res) => {
      if (true) {
        // On trouve le bon logement
        setLogement({});
      } else {
        // Le logement n'existe pas pour l'id donné en url
        setIsError404(true);
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>chargement en cours..</p>;
  }

  if (isError404) {
    return (
      <>
        <Error />
      </>
    );
  }

  return (
    <>
      <Header />
      <div>
        <p>{logement.title}</p>
      </div>
      <Footer />
    </>
  );
};

export default Logements;
