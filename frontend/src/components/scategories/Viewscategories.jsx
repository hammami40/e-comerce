import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardsCategorie = ({ scategorie }) => {
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <div className="card-header">
        <h3>{scategorie.nomscategorie}</h3>
      </div>
      <div className="card-body">
        <img
          src={scategorie.imagescategorie}
          alt="Catégorie"
          className="img-fluid mb-3"
          style={{ maxWidth: "200px" }}
        />
        <p>
          <strong>ID de la scatégorie :</strong> {scategorie._id}
        </p>
        <p>
          <strong>Nom de la scatégorie :</strong> {scategorie.nomscategorie}
        </p>
      </div>
    </div>
  );
};

const Viewscategories = () => {
  const [scategorie, setsCategorie] = useState({
    nomscategorie: "",
    imagescategorie: "",
  });

  const { id } = useParams(); // Récupère l'ID de la catégorie à partir de l'URL.

  useEffect(() => {
    loadsCategorie();
  }, []);

  const loadsCategorie = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3001/api/scategories/${id}`
      );
      setsCategorie(result.data);
    } catch (error) {
      console.error("Erreur lors du chargement de la catégorie :", error);
      alert("Impossible de charger la catégorie. Veuillez réessayer.");
    }
  };

  return (
    <div className="container mt-5">
      <CardsCategorie scategorie={scategorie} />
    </div>
  );
};

export default Viewscategories;
