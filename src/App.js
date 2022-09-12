import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/productos" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
          </Routes>
      </div> 
    </BrowserRouter>
    
  );
}

export default App;
