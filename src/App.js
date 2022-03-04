import './App.css';
import HomePage from './Components/HomePage/HomePage';
import BeerList from './Components/BeerList/BeerList';
import RandomBeer from './Components/RandomBeer/RandomBeer.jsx'
import NewBeer from './Components/NewBeer/NewBeer.jsx'
import BeerDetails from './Components/BeerDetails/BeerDetails';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/beers" element={<BeerList/>} />
        <Route path="/random-beer" element={<RandomBeer/>} />
        <Route path="/new-beer" element={<NewBeer/>} />
        <Route path="/:id" element={<BeerDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
