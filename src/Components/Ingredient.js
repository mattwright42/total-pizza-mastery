import React, { useContext, useState } from "react";
import IngredientForm from "./IngredientForm";
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import { PizzaContext} from './PizzaContext'
import Pizza from "./Pizza";

function Ingredient({ingredients, removeIngredient, updateIngredient}) {
    const [pizzaContext, setPizzaContext] = useContext(PizzaContext)
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateIngredient(edit.id, value.text)
        setEdit({id: null, value: ''})
    }

    if (edit.id) {
        return <IngredientForm edit={edit} onSubmit={submitUpdate} />
    }

    return (
        <>
        {
            pizzaContext.ingredients.map((ingredient, index) => (
                <div className="todo-row" key={index}>
            <div key={ingredient.id}>
                {ingredient.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                    onClick={() => removeIngredient(ingredient.id)}
                    className="delete-icon"/>
                <TiEdit 
                    onClick={() => setEdit({id: ingredient.id, value: ingredient.text})}
                    className="edit-icon"/>
            </div>
        </div>
            ))
        }
        </>
    )

    
}

export default Ingredient