import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Listscategories = () => {

  const [scategories,setsCategories]=useState([])
  const fetchscategories=async()=>{
    await axios.get("http://localhost:3001/api/scategories")
    .then(res=>{
      setsCategories(res.data)
      console.log(res.data)
  })
  .catch(error=>{
    console.log(error)
  })
}
useEffect(()=>{
  fetchscategories()

},[])

 const handleDelete=async(id)=>{
      await axios.delete(`http://localhost:3001/api/scategories/${id}`);
      fetchscategories();
    };


  return (
    <div className="container">
      <div>
        <nav className="navbar navbar-expand-lg navbar-drak bg-success">
          <div className="container-fluid">
            <Link className="btn btn-outline-light" to="/scategories/add"><i className="fa-solid fa-plus"></i>  Ajouter scategorie  </Link>

          </div>
        </nav>
      </div>
      
      <div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <td>Nom scategorie</td>
            <td>Image scategorie</td>
            <td>View</td>
            <td>Modifier</td>
            <td>Supprimer</td>
          </tr>
        </thead>
        <tbody>
          { 
            scategories.map((cat,index)=>
              <tr>
                <td>{cat.nomscategorie}</td>
                <td><img src={cat.imagescategorie} width={100} height={100}/></td>
                <td><Link className="btn btn-primary mx-2" to={`/scategories/view/${cat._id}`}><i class="fa-regular fa-eye"></i> consulter </Link></td>
                <td><Link className="btn btn-outline-primary mx-2" to={`/scategories/edit/${cat._id}`}><i class="fa-regular fa-pen-to-square"></i> Modifier</Link></td>
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

export default Listscategories
