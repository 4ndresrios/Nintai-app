import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar/>
      <div className="App-header">
        {/* <ItemListContainer/> */}
        <ItemDetailContainer/>
      </div>
      
    </>
  );
}

export default App;
