import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import FormModal from './FormModal';

export default class BlogList extends React.Component {

  constructor(_props){
    super()
    this.state = {
      blogsList: [],
      modalShow: false,
      blogid: '',
      title: '',
      content: ''
    }
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

  onClick(item) {
    this.setState({
      modalShow: true,
      blogid: item.id,
      title: item.title,
      content: item.content
    })
  }
  
  renderList() {
    return this.state.blogsList.map((item, index) => (
      <Jumbotron key={item.id} className="blog-item">
        <h2>{ item.title }</h2>
        <p>{ item.content }</p>
        <ButtonToolbar>
          <Button variant="primary" onClick={() => this.onClick(item)} >
            Edit
          </Button>
        </ButtonToolbar>
      </Jumbotron>
    ))
  }

  renderModal() {
    let modalClose = () => this.setState({ modalShow: false })

    return (      
      <FormModal show={ this.state.modalShow }
                     onHide={ modalClose }
                     blogid={ this.state.blogid }
                     title={ this.state.title }
                     content={ this.state.content } />
    )
  }

  render() {
    return (
      <div className="blog-list">
        { this.renderList() }
        { this.renderModal() }
      </div>
    );
  }
}
