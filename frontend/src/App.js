import Cart from './components/client/shopping/Cart'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    
  );
}
export default App;
