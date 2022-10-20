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
  const [pizzas, setPizzas] = useState(null)

  return (
    <Router>
      <div className='pizza-app'>
        <Navbar />
        <PizzaContext.Provider value={[pizzas, setPizzas]}>
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/ingredients' element={<IngredientList />} />
              <Route path='/pizzas' element={<PizzaList />} />
              <Route path='/pizzacard/:id' element={<PizzaCard />} />
          </Routes>
       </PizzaContext.Provider>
      </div>
    </Router>
  );
}

export default App;
