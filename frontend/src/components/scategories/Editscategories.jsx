import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Editscategories = () => {
  const [scategorie, setSCategories] = useState({
    nomscategorie:'',
    imagescategorie:'',
  });
  
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    loadscategorie();
  }, []);


  const loadscategorie = async () => {
    try {
      const result = await axios.get(`http://localhost:3001/api/scategories/${id}`);
      setSCategories(result.data);
    } catch (error) {
      console.error("Erreur lors du chargement de l'scategories :", error);
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/scategories/${id}`, scategorie);
      navigate('/scategories'); 
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'scategorie :", error);
    }
  };

  
  const handleChange = (e) => {
    setSCategories({ ...scategorie, [e.target.name]: e.target.value });
  };
  

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h2 className="text-center my-4">Modifier un SCategorie</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom scategorie</label>
          <input
            type="text"
            className="form-control"
            name="nomscategorie"
            value={scategorie.nomscategorie}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image scategorie</label>
          <input
            type="text"
            className="form-control"
            name="imagescategorie"
            value={scategorie.imagescategorie}
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

export default Editscategories;
