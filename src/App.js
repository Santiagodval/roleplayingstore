import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';



function App() {
  return (
    <div className="App">
      <header>
          <NavBar/>
      </header>
      <main>
          <ItemListContainer prop="Hola mundo"/>
          <ItemList items={[{
            title:"dados d20",
            id:3,
            pictureUrl:"../public/D20.jpg",
            price:300,
            stock:30
          },{
            title:"dados d20",
            id:3,
            pictureUrl:"../public/D20.jpg",
            price:300,
            stock:30
          },{
            title:"dados d20",
            id:3,
            pictureUrl:"../public/D20.jpg",
            price:300,
            stock:30
          }]}/>
      </main>
    </div>
  );
}

export default App;
