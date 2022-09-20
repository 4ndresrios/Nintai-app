import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import CartContainer from './Components/CartContainer/CartContainer';
import CartProvider from "./context/CartContext"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className='App'>
          <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/productos" element={<ItemListContainer/>}/>
              <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
              <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<CartContainer/>}/>
            </Routes>
        </div> 
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
