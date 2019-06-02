import React from 'react';
import Blogs from './blogs';
import Header from './header';

export default class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Header/>
        <div className="container">
          <Blogs className="blogs"></Blogs>
        </div>
      </React.Fragment>
    );  
  }
}
