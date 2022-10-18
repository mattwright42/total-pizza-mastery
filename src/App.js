import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Ingredients from './Components/Ingredients';
import Pizzas from './Components/Pizzas';

import './App.css';

function App() {
  return (
    <Router>
      <div className='content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/ingredients' element={<Ingredients />} />
          <Route path='/pizzas' element={<Pizzas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
