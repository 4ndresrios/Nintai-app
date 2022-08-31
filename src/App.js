import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer greeting={"Bienvenido, proximamente podras conocer nuestros productos."}/>
          <ItemCount/>
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
