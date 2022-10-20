import React, { useState, useEffect, useRef } from "react";

function IngredientForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
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