import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer className="App-header" greeting={"Bienvenido, proximamente podras conocer nuestros productos."}/>
      </header>
    </div>
  );
}

export default App;
