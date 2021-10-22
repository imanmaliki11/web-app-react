import { useState } from 'react'
import { Container, Table, Button, Row, Col, Form, Alert } from 'react-bootstrap'
import Loading from '../components/loading/loading'
import './home.css'
import * as allAPI from '../api/allAPI'

const Home = () => {

    const [getNews, setNews] = useState([]);
    const [getInputQ, setInputQ] = useState('');
    const [isLoading, setLoading] = useState(false);

    const handleClick = (e) => {
        setLoading(true)
        e.preventDefault()
        allAPI.News(getInputQ).then((res) => {
            if (res.articles) {
                setNews(res.articles)
                console.log(res.articles)
            }
            else
                setNews({})
            setLoading(false)
        })
        setInputQ('')
    }

    const handleInput = (e) => {
        setInputQ(e.target.value)
    }

    return (
        <Container>
            {(isLoading) ? (
                <Loading />
            ) : (<></>)}
            <div>
                <h4>Home Page</h4>
                <Form onSubmit={handleClick}>
                    <Row>
                        <Col>
                            <Form.Control required autoFocus type="text" placeholder="Enter Key" value={getInputQ} onChange={handleInput} />
                        </Col>
                        <Col>
                            <Button variant="outline-primary" type="submit">Hit API</Button>{' '}
                        </Col>
                    </Row>
                </Form>

                {(getNews.length) ? (

                    <Table striped bordered hover size="sm" className="mt-3">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getNews.map((news, idx) => {
                                    return (
                                        <tr key={news._id}>
                                            <td> {idx + 1} </td>
                                            <td> {news.title} </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                ) : (
                    <div className="text-center py-4">
                        <Alert variant='warning'>
                            Data Kosong
                        </Alert>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default Home