import React, { Component } from 'react';
import './App.css';
import MyHeader from './components/MyHeader/MyHeader';
import MyFooter from './components/MyFooter/MyFooter';
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div>
        <MyHeader/>
        <Content/>
        <MyFooter/>
      </div>
    );
  }
}

export default App;
