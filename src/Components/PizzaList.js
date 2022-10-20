import React, {useState, useContext} from 'react'
import PizzaForm from './PizzaForm'
import Pizza from './Pizza'
import { PizzaContext } from './PizzaContext'

function PizzaList() {
  const [pizzas, setPizzas] = useState([])
  const [pizzaContext, setPizzaContext] = useContext(PizzaContext)

  const addPizza = pizza => {
    if (!pizza.text || /^\s*$/.test(pizza.text)) {
      return
    }

    const newPizzas = [pizza, ...pizzas]

    
    setPizzas(newPizzas)
    setPizzaContext(newPizzas)
  }

  const updatePizza = (pizzaId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setPizzas(prev => prev.map(item => (item.id === pizzaId ? newValue: item)))
  }

  const removePizza = id => {
    const removeArr = [...pizzas].filter(pizza => pizza.id !== id)
    setPizzas(removeArr)
  }
  //console.log(pizzaContext)

  return (
    <div>
      <h1>What kinds of pizzas will you make?</h1>
      
      <PizzaForm onSubmit={addPizza} />
      <Pizza pizzas={pizzas} removePizza={removePizza} updatePizza={updatePizza} pizzaContext={pizzaContext} />

      <p>Click on the pizza name to add/edit/remove toppings!</p>
      
    </div>
  )
}

export default PizzaList

