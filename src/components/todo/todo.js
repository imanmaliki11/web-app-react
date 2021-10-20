import './todo.css'
import { TodoList } from '../todo-list/todolist'
import TodoForm from '../todo-form/todoform'
import { useState } from 'react'

const Todo = () => {
    const [getItem, setItem] = useState([
        { id: 1, val: 'Coding' }
    ])

    const handleAddItem = (val) => {
        setItem(getItem.concat(val))
    }

    return (
        <div className="container">
            <h1>Todo List</h1>
            <TodoForm addItem={handleAddItem} />
            <TodoList dataItem={getItem} />
        </div>
    );
}

export default Todo;