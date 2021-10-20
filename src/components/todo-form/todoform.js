import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
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
        setInputTodo('')
        props.addItem(item)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs lg={8}>
                        <Form.Control type="text" name="todoinput" placeholder="Input New Todo List" onChange={handleInput} value={getInputTodo} autoComplete="off" />
                    </Col>
                    <Col xs lg="auto">
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div >
    );
}

export default TodoForm;