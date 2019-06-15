import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import FormModal from './FormModal';

export default class BlogList extends React.Component {

  constructor(){
    super()
    this.state = {
      blogList: [],
      modalShow: false,
      blogid: '',
      title: '',
      content: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { blogsList: nextProps.blogList }
  }

  onClick(item) {
    this.setState({
      modalShow: true,
      blogid: item.id,
      title: item.title,
      content: item.content
    })
  }

  deleteRecord(item) {
    let url = `https://bdrbn5pb32.execute-api.ap-southeast-1.amazonaws.com/dev/blogs/${item.id}`
    let record = { id: item.id }
    
    fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(record)
    })
    .then(res => res.json())
    .then(response => console.log(`Success: ${JSON.stringify(response)}`))
    .catch(error => console.error(`Error: ${error}`));
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
          <Button variant="danger" className="ml-2" onClick={() => this.deleteRecord(item)} >
            Delete
          </Button>
        </ButtonToolbar>
      </Jumbotron>
    ))
  }

  renderModal() {
    let modalClose = () => this.setState({ modalShow: false })

    return (      
      <FormModal show={ this.state.modalShow }
                 onSubmit={ modalClose }
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
