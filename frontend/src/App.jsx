import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Editarticle from "./components/articles/Editarticle";
import Insertarticle from "./components/articles/Insertarticle";
import Listarticles from "./components/articles/Listarticles";
import Viewarticle from "./components/articles/Viewarticle";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu"
import Listcategories from "./components/categories/Listcategories";
import Insertcategories from "./components/categories/Insertcategories";
import Editcategories from "./components/categories/Editcategories";
import Viewcategories from "./components/categories/Viewcategories";
import Listscategories from "./components/scategories/Listscategories";
import Insertscategories from "./components/scategories/Insertscategories";
import Editscategories from "./components/scategories/Editscategories";
import Viewscategories from "./components/scategories/Viewscategories";
import Listarticlecard from "./components/client/Listarticlecard";
import { CartProvider } from "use-shopping-cart";
import Cart from "./components/client/shopping/Cart";
function App() {
  

  return (
    <>
    <CartProvider>
    <Router>
<Menu></Menu>
      <Routes>
        <Route path="/articles" element={<Listarticles/>}/>
        <Route path="/articles/add" element={<Insertarticle/>}/>
        <Route path="/articles/edit/:id" element={<Editarticle/>}/>
        <Route path="/articles/view/:id" element={<Viewarticle/>}/>
        <Route path="/categories" element={<Listcategories/>}/>
        <Route path="/categories/add" element={<Insertcategories/>}/>
        <Route path="/categories/edit/:id" element={<Editcategories/>}/>
        <Route path="/categories/view/:id" element={<Viewcategories/>}/>
        <Route path="/scategories" element={<Listscategories/>}/>
        <Route path="/scategories/add" element={<Insertscategories/>}/>
        <Route path="/scategories/edit/:id" element={<Editscategories/>}/>
        <Route path="/scategories/view/:id" element={<Viewscategories/>}/>
        <Route path="/Client" element={<Listarticlecard/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </Router>
    </CartProvider>
    </>
  )
}

export default App
