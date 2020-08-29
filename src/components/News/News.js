import React from 'react';
import {Card} from 'react-bootstrap';

const News = (props) => {
    const { title, description, urlToImage, url, publishedAt, author } = props.news;
    let utcDate = publishedAt;
    let localDate = new Date(utcDate);
    return (

        <Card align="center" className="text-center mb-5 bg-light">
            <Card.Header> Written By :  {author} </Card.Header>
            <Card.Img style={{height : '200px', width : '200px', margin: '0 auto'}} variant="top" src={urlToImage}/>
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text> {description} </Card.Text>
                <Card.Link target="_blank" href={url}>News Link...</Card.Link>
            </Card.Body>
            <Card.Footer className="text-muted"> Published At :  {localDate.toString()} </Card.Footer>
        </Card>

       
    );
};

export default News;