import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import AllBeers from './pages/AllBeers';
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
