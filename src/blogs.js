import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default class Blogs extends React.Component {

  constructor(_props){
    super()
    this.state = { blogsList: [] }

    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }
  
  fetchData() {
    const url = 'https://bdrbn5pb32.execute-api.ap-southeast-1.amazonaws.com/dev/blogs'
    
    fetch(url)
    .then(response => (response.json()))
    .then(data => {
      this.setState(
        { blogsList: data }
      ) 
    })
  }

  renderList() {
    return this.state.blogsList.map(({title, body}, index) => (
      <Jumbotron key={index} className="blog-item">
        <h2>{title}</h2>
        <p>{body}</p>
      </Jumbotron>
    ))
  }

  render() {
    return (
      <div className="blog-list">
        { this.renderList() }
      </div>
    );
  }
}
