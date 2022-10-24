import React, {useState, useContext} from 'react'
import PizzaForm from './PizzaForm'
import Pizza from './Pizza'
import { PizzaContext } from './PizzaContext'

function PizzaList() {
  
  const [pizzaContext, setPizzaContext] = useContext(PizzaContext)

  const addPizza = pizza => {
    if (!pizza.text || /^\s*$/.test(pizza.text)) {
      return
    }

    const newPizzas = [pizza, ...pizzaContext.pizzas]

    
    
    setPizzaContext({...pizzaContext, pizzas: newPizzas})
  }

  const updatePizza = (pizzaId, newValue) => {
    if (!newValue || /^\s*$/.test(newValue)) {
      return
    }
    let pizzaIndex = pizzaContext.pizzas.findIndex(pizza => pizza.id === pizzaId)
    console.log(pizzaIndex)
    let pizzaArray = pizzaContext.pizzas
    console.log("initial array",pizzaArray)
    pizzaArray[pizzaIndex] = {id: pizzaId, text: newValue}
    console.log("changed array",pizzaArray)
    setPizzaContext({...pizzaContext, pizzas: pizzaArray})
    
    // setPizzas(prev => prev.map(item => (item.id === pizzaId ? newValue: item)))
  }

  const removePizza = id => {
    const removeArr = [...pizzaContext.pizzas].filter(pizza => pizza.id !== id)
    setPizzaContext({...pizzaContext, pizzas: removeArr})
  }
  //console.log(pizzaContext)

  return (
    <div>
      <h1>What kinds of pizzas will you make?</h1>
      
      <PizzaForm onSubmit={addPizza} />
      <Pizza removePizza={removePizza} updatePizza={updatePizza} />

      <p>Click on the pizza name to add/edit/remove toppings!</p>
      
    </div>
  )
}

export default PizzaList

