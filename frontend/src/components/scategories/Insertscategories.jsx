import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const Insertscategories = () => {
  const[scat,setScat]=useState([])
  const[scategorie,setsCategories]=useState({})
  const navigate=useNavigate()

  const loadscatgorie=async()=>{
    try{
      const res=await axios.get("http://localhost:3001/api/scategories")
      setScat(res.data)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    loadscatgorie()
  },[])
  const handleSave=async(e)=>{
    try{
      e.preventDefault()
      await axios.post("http://localhost:3001/api/scategories",scategorie)
      .then(res=>{
        navigate("/scategories")

      })
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <center><h1>Insertition scategorie </h1></center>
      <Form>
        <Row className="nb-2">
      <Form.Group as={Col} md="6">
        <Form.Label>Nom scategorie</Form.Label>
        <Form.Control type="Text" placeholder="Nom scategorie" 
        value={scategorie.nomscategorie}
        onChange={(e)=>setsCategories({...scategorie,nomscategorie:e.target.value})}/>
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>Image scategorie</Form.Label>
        <Form.Control type="Text" placeholder="image categorie"
        value={scategorie.imagescategorie}
        onChange={(e)=>setsCategories({...scategorie,imagescategorie:e.target.value})} />
      </Form.Group>
      </Row>
      <button className='btn btn-success btn-sm' onClick={(e)=>handleSave(e)}><i class="fa-solid fa-floppy-disk"></i> Enregistrer</button>
       &nbsp; 
       <Link to="/scategories"> <button className='btn btn-danger btn-sm'><i class="fa-solid fa-person-walking-arrow-right"></i> Annuler</button></Link>
    </Form>     
    </div>


  )
}

export default Insertscategories
