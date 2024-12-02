import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import {Link}from "react-router-dom";

const Listcategories = () => {
  const [categories,setCategories]=useState([])
  const fetchcategories=async()=>{
    await axios.get("http://localhost:3001/api/categories")
    .then(res=>{
      setCategories(res.data)
      console.log(res.data)
  })
    .catch(error=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    fetchcategories()

  },[])

   const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:3001/api/categories/${id}`);
        fetchcategories();
      };

  return (
    <div className="container">
      <div>
        <nav className="navbar navbar-expand-lg navbar-drak bg-success">
          <div className="container-fluid">
            <Link className="btn btn-outline-light" to="/categories/add"><i className="fa-solid fa-plus"></i>  Ajouter categorie  </Link>

          </div>
        </nav>
      </div>
    <div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <td>Nom categorie</td>
            <td>Image categorie</td>
            <td>View</td>
            <td>Modifier</td>
            <td>Supprimer</td>
          </tr>
        </thead>
        <tbody>
          { 
            categories.map((cat,index)=>
              <tr>
                <td>{cat.nomcategorie}</td>
                <td><img src={cat.imagecategorie} width={100} height={100}/></td>
                <td><Link className="btn btn-primary mx-2" to={`/categories/view/${cat._id}`}><i class="fa-regular fa-eye"></i> consulter </Link></td>
                <td><Link className="btn btn-outline-primary mx-2" to={`/categories/edit/${cat._id}`}><i class="fa-regular fa-pen-to-square"></i> Modifier</Link></td>
                <td> <button className="btn btn-danger mx-2" onClick={()=>handleDelete(cat._id)}><i class="fa-solid fa-trash"></i> supprimer</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Listcategories
