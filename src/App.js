import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home';
import IngredientList from './Components/IngredientList';
import Pizzas from './Components/Pizzas';

import './App.css';

function App() {
  return (
    <Router>
      <div className='todo-app'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/ingredients' element={<IngredientList />} />
          <Route path='/pizzas' element={<Pizzas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
