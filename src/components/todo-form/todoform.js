import { useState } from 'react';
import './todoform.css'


const TodoForm = (props) => {

    const [getInputTodo, setInputTodo] = useState('')

    const handleInput = (event) => {
        setInputTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const item = {
            id: Math.floor(Math.random() * 1000) + 1,
            val: getInputTodo
        }
        props.addItem(item)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoinput" placeholder="Input New Todo List" onChange={handleInput} autoComplete="off" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default TodoForm;