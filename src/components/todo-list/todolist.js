import './todolist.css'
import { Table } from 'react-bootstrap';

const TodoList = (props) => {
    return (
        <Table responsive striped bordered hover variant="dark" size="xs" className="mt-3">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.dataItem.map((todoItem, idx) => {
                        return (
                            <tr key={todoItem.id}>
                                <td> {idx + 1} </td>
                                <td> {todoItem.val} </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
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