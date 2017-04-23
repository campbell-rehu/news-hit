import React from 'react';
import FeedItem from './FeedItem';
import './Feed.css';

export default class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    render() {
        var newsItems = this.props.items;
        var items = newsItems.map(item => {
            return <FeedItem key={item.title} 
                        title={item.title} 
                        description={item.description}
                        author={item.author}
                        publishDate={item.publishedAt}
                        url={item.url}
                        image={item.urlToImage} />
        });
        return (
            <div id="feed">
                {items}
            </div>
        );
    }
}