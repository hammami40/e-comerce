import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const Insertarticle = () => {
  const[scat,setScat]=useState([])
  const[article,setArticle]=useState({})
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
      await axios.post("http://localhost:3001/api/articles",article)
      .then(res=>{
        navigate("/articles")

      })
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <center><h1>Insertition article </h1></center>
      <Form>
        <Row className="nb-2">
      <Form.Group as={Col} md="6">
        <Form.Label>Reference</Form.Label>
        <Form.Control type="Text" placeholder="Reference" 
        value={article.reference}
        onChange={(e)=>setArticle({...article,reference:e.target.value})}/>
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="Text" placeholder="Designation"
        value={article.designation}
        onChange={(e)=>setArticle({...article,designation:e.target.value})} />
      </Form.Group>
      </Row>
      <Row className="nb-2">
      <Form.Group as={Col} md="6">
        <Form.Label>Quantité stock</Form.Label>
        <Form.Control type="Number" placeholder="Quantité stock"
        value={article.qtestock}
        onChange={(e)=>setArticle({...article,qtestock:e.target.value})} />
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>Prix</Form.Label>
        <Form.Control type="Number" placeholder="Prix"
        value={article.prix}
        onChange={(e)=>setArticle({...article,prix:e.target.value})} />
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>Image</Form.Label>
        <Form.Control type="Text" placeholder="Image" 
        value={article.image}
        onChange={(e)=>setArticle({...article,image:e.target.value})}/>
      </Form.Group>
      <Form.Group as={Col} md="6">
    <Form.Label>Sous categorie</Form.Label>
    <Form.Control 
        as="select" 
        value={article.scategorieID}
        onChange={(e) => setArticle({ ...article, scategorieID: e.target.value })}
    >
        <option value="">Sélectionner une sous-catégorie</option>
        {scat.map((sc, index) => (
            <option key={index} value={sc._id}>
                {sc.nomscategorie}
            </option>
        ))}
    </Form.Control>
</Form.Group>

      </Row>
      <button className='btn btn-success btn-sm' onClick={(e)=>handleSave(e)}><i class="fa-solid fa-floppy-disk"></i> Enregistrer</button>
       &nbsp; 
       <Link to="/articles"> <button className='btn btn-danger btn-sm'><i class="fa-solid fa-person-walking-arrow-right"></i> Annuler</button></Link>
    </Form>     
    </div>


  )
}

export default Insertarticle
