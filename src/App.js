import React from 'react';
import BlogList from './components/BlogList';
import Header from './components/Header';
import CreateForm from './components/CreateForm' 

export default class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Header/>
        <div className="container my-5">
          <BlogList className="blog-list"/>
          <CreateForm />
        </div>
      </React.Fragment>
    );  
  }
}
