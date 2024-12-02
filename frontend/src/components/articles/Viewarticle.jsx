import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardArticle = ({ article }) => {
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <div className="card-header">
        <h3>{article.reference}</h3>
      </div>
      <div className="card-body">
        <img
          src={article.imageart}
          alt="Article"
          className="img-fluid mb-3"
          style={{ maxWidth: "200px" }}
        />
        <p>
          <strong>Désignation :</strong> {article.designation}
        </p>
        <p>
          <strong>Quantité en stock :</strong> {article.qtestock}
        </p>
        <p>
          <strong>Prix :</strong> {article.prix} TND
        </p>
      </div>
    </div>
  );
};

const Viewarticle = () => {
  const [article, setArticle] = useState({
    reference: "",
    designation: "",
    imageart: "",
    prix: "",
    qtestock: 0,
  });

  const { id } = useParams();

  useEffect(() => {
    loadArticle();
  }, []);

  const loadArticle = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3001/api/articles/${id}`
      );
      setArticle(result.data);
    } catch (error) {
      console.error("Erreur lors du chargement de l'article :", error);
      alert("Impossible de charger l'article. Veuillez réessayer.");
    }
  };

  return (
    <div className="container mt-5">
      <CardArticle article={article} />
    </div>
  );
};

export default Viewarticle;
