import './todolist.css'

const TodoList = (props) => {
    return (
        <ul>
            {
                props.dataItem.map((todoItem) => {
                    return <li key={todoItem.id}>{todoItem.val}</li>
                })
            }
        </ul>
    );
}

const secondFun = () => {
    return (
        <div>
            Iman Maliki
        </div>
    )
}


export { TodoList, secondFun };