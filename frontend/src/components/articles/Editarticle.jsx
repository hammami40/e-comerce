import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Editarticle = () => {
  const [article, setArticle] = useState({
    reference: '',
    designation: '',
    qtestock: '',
    prix: '',
    imageart: '',
  });
  
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    loadArticle();
  }, []);


  const loadArticle = async () => {
    try {
      const result = await axios.get(`http://localhost:3001/api/articles/${id}`);
      setArticle(result.data);
    } catch (error) {
      console.error("Erreur lors du chargement de l'article :", error);
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/articles/${id}`, article);
      navigate('/articles'); 
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'article :", error);
    }
  };

  
  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h2 className="text-center my-4">Modifier un Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Référence</label>
          <input
            type="text"
            className="form-control"
            name="reference"
            value={article.reference}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Désignation</label>
          <input
            type="text"
            className="form-control"
            name="designation"
            value={article.designation}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantité en Stock</label>
          <input
            type="number"
            className="form-control"
            name="qtestock"
            value={article.qtestock}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Prix</label>
          <input
            type="number"
            className="form-control"
            name="prix"
            value={article.prix}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">URL de l'Image</label>
          <input
            type="text"
            className="form-control"
            name="imageart"
            value={article.imageart}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
        <i class="fa-solid fa-floppy-disk"></i> Enregistrer les modifications
        </button>
      </form>
    </div>
  );
};

export default Editarticle;
