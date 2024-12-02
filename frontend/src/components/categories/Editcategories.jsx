import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Editcategories = () => {
  const [categorie, setCategories] = useState({
    nomcategorie:'',
    imagecategorie:'',
  });
  
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    loadcategorie();
  }, []);


  const loadcategorie = async () => {
    try {
      const result = await axios.get(`http://localhost:3001/api/categories/${id}`);
      setCategories(result.data);
    } catch (error) {
      console.error("Erreur lors du chargement de l'categories :", error);
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/categories/${id}`, categorie);
      navigate('/categories'); 
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'categorie :", error);
    }
  };

  
  const handleChange = (e) => {
    setCategories({ ...categorie, [e.target.name]: e.target.value });
  };
  

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h2 className="text-center my-4">Modifier un Categorie</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom categorie</label>
          <input
            type="text"
            className="form-control"
            name="nomcategorie"
            value={categorie.nomcategorie}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image categorie</label>
          <input
            type="text"
            className="form-control"
            name="imagecategorie"
            value={categorie.imagecategorie}
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

export default Editcategories;
