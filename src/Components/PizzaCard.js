import React, {useState, useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Ingredient from './Ingredient'
import IngredientForm from './IngredientForm'
import { PizzaContext } from './PizzaContext'

function PizzaCard() {
    const [ingredients, setIngredients] = useState([])

    const [pizzaContext, setPizzaContext] = useContext(PizzaContext)

    const params = useParams();

    const addIngredient = ingredient => {
        if (!ingredient.text || /^\s*$/.test(ingredient.text)) {
            return
        }

        const newIngredients = [ingredient, ...ingredients]

        setIngredients(newIngredients)
    }

    const updateIngredient = (ingredientId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setIngredients(prev => prev.map(item => (item.id === ingredientId ? newValue : item)))
    }

    const removeIngredient = id => {
        const removeArr = [...ingredients].filter(ingredient => ingredient.id !== id)
        setIngredients(removeArr)
    }

    console.log(pizzaContext)
    // useEffect(() => {
    //         console.log(pizzaContext.find(el => el.id === params.id))
    // }, [])

    return (
        <div>
            <h1>Put toppings on your pizza!</h1>
            <IngredientForm onSubmit={addIngredient} />
            <Ingredient ingredients={ingredients} removeIngredient={removeIngredient} updateIngredient={updateIngredient} />
        </div>
    )
}

export default PizzaCard