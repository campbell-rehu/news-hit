import React from 'react';
import './SelectListItem.css';

export default class SelectListItem extends React.Component {
    handleClick(source) {
        this.props.changeSource(source);
    }
    render() {
        return (
            <div id="select-list-item">
                <a className={this.props.selected ? 'active' : ''} 
                    href="#" 
                    onClick={(e) => this.handleClick(this.props.source)}>
                    {(this.props.selected) ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}  {this.props.content} {(this.props.selected) ? <i className="fa fa-angle-left" aria-hidden="true"></i> : ''}                    
                </a>
            </div>
        );
    }
}