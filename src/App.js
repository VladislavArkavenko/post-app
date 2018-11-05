import React, { Component } from 'react';
import CreatePost from './containers/CreatePost';
import './App.css';
import PostList from './containers/PostList';

class App extends Component {
  render() {
    return (
      <div className="App">        
        < CreatePost />       
        < PostList />        
      </div>
    );
  }
}

export default App;
