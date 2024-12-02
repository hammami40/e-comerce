import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardCategorie = ({ categorie }) => {
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <div className="card-header">
        <h3>{categorie.nomcategorie}</h3>
      </div>
      <div className="card-body">
        <img
          src={categorie.imagecategorie}
          alt="Catégorie"
          className="img-fluid mb-3"
          style={{ maxWidth: "200px" }}
        />
        <p>
          <strong>ID de la catégorie :</strong> {categorie._id}
        </p>
        <p>
          <strong>Nom de la catégorie :</strong> {categorie.nomcategorie}
        </p>
      </div>
    </div>
  );
};

const Viewcategories = () => {
  const [categorie, setCategorie] = useState({
    nomcategorie: "",
    imagecategorie: "",
  });

  const { id } = useParams(); // Récupère l'ID de la catégorie à partir de l'URL.

  useEffect(() => {
    loadCategorie();
  }, []);

  const loadCategorie = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3001/api/categories/${id}`
      );
      setCategorie(result.data);
    } catch (error) {
      console.error("Erreur lors du chargement de la catégorie :", error);
      alert("Impossible de charger la catégorie. Veuillez réessayer.");
    }
  };

  return (
    <div className="container mt-5">
      <CardCategorie categorie={categorie} />
    </div>
  );
};

export default Viewcategories;
