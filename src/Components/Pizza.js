import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import PizzaForm from './PizzaForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { PizzaContext } from './PizzaContext'

function Pizza({pizzas, removePizza, updatePizza}) {
    // const [pizzaContext, setPizzaContext] = useContext(pizzaContext)
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate= value => {
        updatePizza(edit.id, value)
        setEdit({id: null, value: ''})
    }

    if (edit.id) {
        return <PizzaForm edit={edit} onSubmit={submitUpdate} />
    }

    return pizzas.map((pizza, index) => (
        <div className='todo-row' key={index}>
            <div key={pizza.id}>
                <Link to={`/pizzacard/${pizza.id}`}>{pizza.text}</Link>
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removePizza(pizza.id)}
                    className='delete-icon'/>
                <TiEdit
                    onClick={() => setEdit({id: pizza.id, value: pizza.text})}
                    className='edit-icon'/>
            </div>
        </div>
    ))
}


export default Pizza