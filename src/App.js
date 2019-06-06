import React from 'react';
import BlogList from './components/BlogList';
import Header from './header';
import BlogForm from './components/Blogform' 

export default class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Header/>
        <div className="container my-5">
          <BlogList className="blog-list"/>
          <BlogForm />
        </div>
      </React.Fragment>
    );  
  }
}
