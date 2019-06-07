import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class CreateForm extends React.Component {
  constructor(_props) {
    super();
    this.state = {
      titleInput: '',
      contentInput: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postData = this.postData.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({[name]: value})
  }
  
  postData() {
    let url = 'https://bdrbn5pb32.execute-api.ap-southeast-1.amazonaws.com/dev/blogs'
    let data = {title: this.state.titleInput, content: this.state.contentInput}

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => console.log(`Success: ${JSON.stringify(response)}`))
    .catch(error => console.error(`Error: ${error}`));
  }
  
  handleSubmit(event) {
    this.postData();
    this.setState({titleInput: '', contentInput: ''})    
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={ this.handleSubmit }>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={ this.handleInputChange }
                        name="titleInput"
                        value={this.state.titleInput}
                        size="lg" type="text" />
        </Form.Group>

        <Form.Group controlId="formContent">
          <Form.Label>Content</Form.Label>
          <Form.Control onChange={ this.handleInputChange }
                        name="contentInput"
                        value={this.state.contentInput}
                        as="textarea"
                        rows="10" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
