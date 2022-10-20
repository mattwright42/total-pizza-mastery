import React, { useState } from 'react';
import Ingredient from './Ingredient'
import IngredientForm from './IngredientForm';

function IngredientList() {
    const [ingredients, setIngredients] = useState([])

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

    return (
        <div>
            <h1>What are your toppings?</h1>
            <IngredientForm onSubmit={addIngredient} />
            <Ingredient ingredients={ingredients} removeIngredient={removeIngredient} updateIngredient={updateIngredient} />
        </div>
    )
}

export default IngredientList