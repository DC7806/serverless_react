import React from 'react';
import Blogs from './blogs';

export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Blogs className="blogs"/>
      </div>
    );  
  }
}
