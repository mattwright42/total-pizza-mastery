import React, {useState, useEffect, useRef, useContext } from 'react'
import { PizzaContext } from './PizzaContext'

function PizzaForm(props) {
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

        const isArrayMatch = pizzaContext.pizzas.some(pizza => input === pizza.text)
        if (isArrayMatch) {
            console.log("Duplicate pizza")
            return
        } else {
            props.onSubmit({
                id: Math.floor(Math.random() * 10000),
                text: input
            })
            console.log("pizza added")
            setInput('')
        }

        
    }

    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                        <input
                            type="text"
                            placeholder="Update your pizza"
                            value={input}
                            name="text"
                            className="todo-input edit"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className="todo-button edit">Update Pizza</button>
                    </>
                    ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Add your pizza"
                            value={input}
                            name="text"
                            className="todo-input"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className="todo-button">Add Pizza</button></>
                    )
            }
            </form>
        </div>
    )
}

export default PizzaForm