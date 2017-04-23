import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Footer from './components/Footer';
import $ from 'jquery';
// import { StickyContainer, Sticky } from 'react-sticky';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selection: 'al-jazeera-english',
      articles: []
    }
  }

  componentWillMount() {
    var BASE_URL = 'https://newsapi.org/v1';
    var url = BASE_URL + `/articles?source=${this.state.selection}&sortBy=latest&apiKey=332a312b3deb4defb5afc063eb760803`;
    var self = this;
    $.getJSON(url, function(result, status){
        if (status !== 'success') {
          console.log(`Something happened...`);
        }

        var results = result.articles;
        self.setState({
          articles: results
        });
    });
  }

  updateSource(source) {
    this.setState({
      selection: source
    }, function() {
      var BASE_URL = 'https://newsapi.org/v1';
      var url = BASE_URL + `/articles?source=${this.state.selection}&apiKey=332a312b3deb4defb5afc063eb760803`;
      var self = this;
      $.getJSON(url, function(result, status, xhr){
          if (status !== 'success') {
            console.log(`Something happened...`);
          }
          
      }).done((result) => { 
          var results = result.articles;
          self.setState({
            articles: results
          });
        });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar source={this.state.selection} changeSource={this.updateSource.bind(this)}/>
        <Feed items={this.state.articles}/>
        <Footer />
      </div>
    );
  }
}

export default App;
