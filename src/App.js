import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home';
import IngredientList from './Components/IngredientList';
import PizzaList from './Components/PizzaList';

import './App.css';

function App() {
  return (
    <Router>
      <div className='pizza-app'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/ingredients' element={<IngredientList />} />
          <Route path='/pizzas' element={<PizzaList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
