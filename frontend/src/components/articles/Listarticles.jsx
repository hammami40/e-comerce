import React,{useEffect,useState} from 'react'
import axios from "axios";
import {Link}from "react-router-dom";

const Listarticles = () => {
  const[articles,setArticle]=useState([]);
  useEffect(()=>{
    loadArticles();
  },[]);
  const loadArticles=async()=>{
    const res =await axios.get("http://localhost:3001/api/articles");
    setArticle(res.data);
  };
  const handleDelete=async(id)=>{
    await axios.delete(`http://localhost:3001/api/articles/${id}`);
    loadArticles();
  };
  return (
    <div className="container">
      <div>
        <nav className="navbar navbar-expand-lg navbar-drak bg-success">
          <div className="container-fluid">
            <Link className="btn btn-outline-light" to="/articles/add"><i className="fa-solid fa-plus"></i>  Ajouter article  </Link>

          </div>
        </nav>
      </div>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Reference</th>
              <th scope="col">Designation</th>
              <th scope="col">Quantité stock</th>
              <th scope="col">Prix</th>
              <th scope="col">View</th>
              <th scope="col">Modifier</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((art,index)=>(
              <tr Key={index}>
                <td><img src={art.imageart} width={80} height={80}/></td>
                <td>{art.reference}</td>
                <td>{art.designation}</td>
                <td>{art.qtestock}</td>
                <td>{art.prix}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`/articles/view/${art._id}`}><i class="fa-regular fa-eye"></i> consulter </Link>
                </td>
                <td>
                <Link className="btn btn-outline-primary mx-2" to={`/articles/edit/${art._id}`}> <i className="fa-regular fa-pen-to-square"></i> Modifier</Link>

                </td>
                <td>
                  <button className="btn btn-danger mx-2" onClick={()=>handleDelete(art._id)}><i className="fa-solid fa-trash"></i> supprimer</button>
                </td>
                </tr>
                ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Listarticles
