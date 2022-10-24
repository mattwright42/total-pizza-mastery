import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home';
import IngredientList from './Components/IngredientList';
import PizzaList from './Components/PizzaList';
import PizzaCard from './Components/PizzaCard';
import { PizzaContext } from './Components/PizzaContext';

import './App.css';



function App() {
  const [pizzas, setPizzas] = useState({ingredients: [], pizzas: []})

  return (
    <PizzaContext.Provider value={[pizzas, setPizzas]}>
      <Router>
        <div className='pizza-app'>
          <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/ingredients' element={<IngredientList />} />
                <Route path='/pizzas' element={<PizzaList />} />
                <Route path='/pizzacard/:id' element={<PizzaCard />} />
            </Routes>
        </div>
      </Router>
    </PizzaContext.Provider>
  );
}

export default App;
