import React from 'react';
import SelectListItem from './SelectListItem';

export default class SelectList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    key: 'al-jazeera-english',
                    content: 'Al Jazeera'
                },
                {
                    key: 'bbc-sport',
                    content: 'BBC Sport'
                },
                {
                    key: 'entertainment-weekly',
                    content: 'Entertainment Weekly'
                },
                {
                    key: 'techcrunch',
                    content: 'Tech Crunch'
                },
                {
                    key: 'the-huffington-post',
                    content: 'Huffington Post'
                },
                {
                    key: 'the-next-web',
                    content: 'The Next Web'
                },
                {
                    key: 'the-verge',
                    content: 'The Verge'
                },
                {
                    key: 'time',
                    content: 'Time'
                }
            ]
        }
    }

    changeSource(source) {
        this.props.changeSource(source);
    }

    render() {
        var selectListItems = this.state.items;
        
        if (selectListItems) {
            var items = selectListItems.map(item => {
                return (<SelectListItem 
                            selected={this.props.selectedSource === item.key}
                            key={item.key} 
                            source={item.key} 
                            content={item.content} 
                            changeSource={this.changeSource.bind(this)} />)
            });
        }
        
        return (
            <div id="select-list">
                {items}
            </div>
        );
    }
}