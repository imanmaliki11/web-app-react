import Button from '@restart/ui/esm/Button'
import { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import Loading from '../components/loading/loading'
import axios from 'axios'
import './home.css'

const Home = () => {

    const [getNews, setNews] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const handleClick = (e) => {
        setLoading(true)
        e.preventDefault()
        const news = axios({
            method: 'GET',
            url: 'https://free-news.p.rapidapi.com/v1/search',
            params: { q: 'Elon Musk', lang: 'en' },
            headers: {
                'x-rapidapi-host': 'free-news.p.rapidapi.com',
                'x-rapidapi-key': 'c99cc0c1e2msh7489ad3aaec92b7p1ab10ejsn69541b1f84d0'
            }
        })
            .then((res) => {
                console.log(res.data.articles);
                setNews(res.data.articles)
                setLoading(false)
            });
    }

    return (
        <Container>
            {(isLoading) ? (
                <Loading />
            ) : (<></>)}
            <div>
                <h4>Home Page</h4>
                <Button variant="info" onClick={handleClick}>Coba</Button>
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
            </div>

        </Container>
    )
}

export default Home