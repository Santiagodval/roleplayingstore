import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
import data from './components/mock-data';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header>
          <NavBar/>
      </header>
      <main>
          <ItemListContainer prop="Hola mundo"/>
          <ItemDetailContainer/>
      </main>
    </div>
  );
}

export default App;
