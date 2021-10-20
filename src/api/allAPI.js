import axios from "axios";

const News = () => {
    return axios({
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: { q: 'Elon Musk', lang: 'en' },
        headers: {
            'x-rapidapi-host': 'free-news.p.rapidapi.com',
            'x-rapidapi-key': 'c99cc0c1e2msh7489ad3aaec92b7p1ab10ejsn69541b1f84d0'
        }
    })
        .then((res) => {
            console.log(res);
            return [
                { id: 1, nama: "Iman Maliki" }
            ]
        });
}

export default News;