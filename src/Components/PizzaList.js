import React, {useState} from 'react'
import PizzaForm from './PizzaForm'
import Pizza from './Pizza'

function PizzaList() {
  const [pizzas, setPizzas] = useState([])

  const addPizza = pizza => {
    if (!pizza.text || /^\s*$/.test(pizza.text)) {
      return
    }

    const newPizzas = [pizza, ...pizzas]

    setPizzas(newPizzas)
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

  return (
    <div>
      <h1>What kinds of pizzas will you make?</h1>
      <PizzaForm onSubmit={addPizza} />
      <Pizza pizzas={pizzas} removePizza={removePizza} updatePizz={updatePizza} />
      
    </div>
  )
}

export default PizzaList