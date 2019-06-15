import React from 'react';
import BlogList from './components/BlogList';
import Header from './components/Header';
import CreateForm from './components/CreateForm' 

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      blogList: []
    }
    this.fetchData = this.fetchData.bind(this)
  }
  
  componentDidMount(){
    this.fetchData()  
  }

  fetchData() {
    const url = 'https://bdrbn5pb32.execute-api.ap-southeast-1.amazonaws.com/dev/blogs'

    fetch(url)
    .then(response => (response.json()))
    .then(data => {
      this.setState(
        { blogList: data }
      )
    })
  }
  
  render(){
    return (
      <React.Fragment>
        <Header/>
        <div className="container my-5">
          <BlogList className="blog-list" 
                    blogList={ this.state.blogList } />
          <CreateForm fetchData={ this.fetchData } />
        </div>
      </React.Fragment>
    );  
  }
}
