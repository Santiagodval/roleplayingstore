import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
          <NavBar/>
      </header>
      <main>
          <ItemListConteiner prop="Hola mundo"/>
      </main>
    </div>
  );
}

export default App;
