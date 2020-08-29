import React, { useState, useEffect } from 'react';
import News from '../News/News';

const BreakingNews = () => {

    const [news, setNews] = useState([]);

    useEffect( () => {
        const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-29&sortBy=publishedAt&apiKey=ed20b29238c24d4d9d9ce6cc932e3db4';
        fetch(url)
        .then(response => response.json())
        .then(data => setNews(data.articles))
    }, []);

    return (
        <div>
            {
                news.map(news => <News news={news}></News> )
            }
        </div>
    );
};

export default BreakingNews;