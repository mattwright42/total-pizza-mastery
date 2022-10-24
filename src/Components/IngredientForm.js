import React, { useState, useEffect, useRef, useContext } from "react";
import {PizzaContext} from './PizzaContext'

function IngredientForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const [pizzaContext, setPizzaContext] = useContext(PizzaContext)

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        // if the text entered matches something aready in the array, don't add it
        // loop through ingredient array checking the text values for a match
        // if match found, console.log and return
        // if no match add to the array
        const isArrayMatch = pizzaContext.ingredients.some(ingredient => input === ingredient.text)
        console.log(isArrayMatch)
        console.log(input)
        if (isArrayMatch) {
            console.log("Duplicate ingredient")
            return
        } else {
            props.onSubmit({
                id: Math.floor(Math.random() * 10000),
                text: input
            })
            console.log("ingredient added")
            setInput('')
        }
        
    }

    return(
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                        <input
                            type="text"
                            placeholder="Update your topping"
                            value={input}
                            name="text"
                            className="todo-input edit"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className="todo-button edit">Update Toppings</button>
                    </>
                    ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Add your topping"
                            value={input}
                            name="text"
                            className="todo-input"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className="todo-button">Add Toppings</button></>
                    )
            }
            </form>
        </div>
    )
}


export default IngredientForm