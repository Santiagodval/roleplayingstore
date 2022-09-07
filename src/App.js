import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
import data from './components/mock-data';



function App() {
  return (
    <div className="App">
      <header>
          <NavBar/>
      </header>
      <main>
          <ItemListContainer prop="Hola mundo"/>
      </main>
    </div>
  );
}

export default App;
