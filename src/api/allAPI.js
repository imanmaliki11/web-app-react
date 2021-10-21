import axios from "axios";

export const News = key => {
    const url = 'https://free-news.p.rapidapi.com/v1/search'
    return axios({
        method: 'GET',
        url: url,
        params: { q: key, lang: 'en' },
        headers: {
            'x-rapidapi-host': 'free-news.p.rapidapi.com',
            'x-rapidapi-key': 'c99cc0c1e2msh7489ad3aaec92b7p1ab10ejsn69541b1f84d0'
        }
    })
        .then((res) => {
            return res.data
        })
        .catch((e) => {
            return e
        });
}