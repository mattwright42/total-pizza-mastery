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

        const newIngredients = [ingredient, ...pizzaContext.ingredients]

        setPizzaContext({...pizzaContext, ingredients: newIngredients})
    }

    const updateIngredient = (ingredientId, newValue) => {
        if (!newValue || /^\s*$/.test(newValue)) {
            return
        }
        let ingredientIndex = pizzaContext.ingredients.findIndex(ingredient => ingredient.id === ingredientId)
        let ingredientArray = pizzaContext.ingredients
        ingredientArray[ingredientIndex] = {id: ingredientId, text: newValue}
        setPizzaContext({...PizzaContext, ingredients: ingredientArray})
    }

    const removeIngredient = id => {
        const removeArr = [...pizzaContext.ingredients].filter(ingredient => ingredient.id !== id)
        setPizzaContext({...pizzaContext, ingredients: removeArr})
    }

    // console.log(pizzaContext)
    // useEffect(() => {
    //         console.log(pizzaContext.find(el => el.id === params.id))
    // }, [])

    return (
        <div>
            <h1>Put toppings on your pizza!</h1>
            <IngredientForm onSubmit={addIngredient} />
            <Ingredient removeIngredient={removeIngredient} updateIngredient={updateIngredient} />
        </div>
    )
}

export default PizzaCard