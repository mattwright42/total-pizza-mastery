import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import PizzaForm from './PizzaForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { PizzaContext } from './PizzaContext'

function Pizza({ removePizza, updatePizza}) {
    const [pizzaContext, setPizzaContext] = useContext(PizzaContext)
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate= value => {
        updatePizza(edit.id, value.text)
        setEdit({id: null, value: ''})
    }

    if (edit.id) {
        return <PizzaForm edit={edit} onSubmit={submitUpdate} />
    }

    return (
        <>
        {
            pizzaContext.pizzas.map((pizza, index) => (
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
        </>
    )
    
    // return pizzas.map((pizza, index) => (
    //     <div className='todo-row' key={index}>
    //         <div key={pizza.id}>
    //             <Link to={`/pizzacard/${pizza.id}`}>{pizza.text}</Link>
    //         </div>
    //         <div className='icons'>
    //             <RiCloseCircleLine
    //                 onClick={() => removePizza(pizza.id)}
    //                 className='delete-icon'/>
    //             <TiEdit
    //                 onClick={() => setEdit({id: pizza.id, value: pizza.text})}
    //                 className='edit-icon'/>
    //         </div>
    //     </div>
    // ))
}


export default Pizza