import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter className="App">
      <header>
          <NavBar/>
      </header>
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/products/:categoryId" element={<ItemListContainer/>}></Route>
          <Route path='/details/:productId' element={<ItemDetailContainer/>}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
