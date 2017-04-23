import React from 'react';
import SelectList from './SelectList';
import './Sidebar.css';

export default class Sidebar extends React.Component {

    changeSource(updatedSource) {
       this.props.changeSource(updatedSource);
    }
    render() {
        return (
            <div id="sidebar">
                <h3>Select News Source</h3>
                <hr width="70%" />
                <SelectList selectedSource={this.props.source} changeSource={this.changeSource.bind(this)}/>
            </div>
        );
    }
}