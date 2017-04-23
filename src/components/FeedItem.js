import React from 'react';

export default class FeedItem extends React.Component {
    render() {
        var date = new Date(this.props.publishDate);
        return (
            <div id="feed-item">
                <a target="_blank" href={this.props.url}>
                    <h3>{this.props.title}</h3>
                    <div>Author: {this.props.author}</div>
                    <div>{date.toDateString()}</div>
                    <div>{this.props.description}</div>
                    <img src={this.props.image} alt={this.props.title + " story image"} />
                </a>
            </div>
        );
    }
}