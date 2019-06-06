import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class EditForm extends React.Component {
  constructor(props) {
    super();

    this.state = {...props}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.putData = this.putData.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({[name]: value})
  }

  putData() {
    let url = `https://bdrbn5pb32.execute-api.ap-southeast-1.amazonaws.com/dev/blogs/${this.state.blogid}`
    let data = {
      title: this.state.title,
      content: this.state.content
    }

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => console.log(`Success: ${JSON.stringify(response)}`))
    .catch(error => console.error(`Error: ${error}`));
  }
  
  handleSubmit(event) {
    this.putData();
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={ this.handleSubmit }>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title"
                        size="lg"
                        type="text"
                        defaultValue={ this.state.title }
                        onChange={ this.handleInputChange }
          />
        </Form.Group>

        <Form.Group controlId="formContent">
          <Form.Label>Content</Form.Label>
          <Form.Control name="content"
                        as="textarea"
                        rows="10"
                        defaultValue={ this.state.content }
                        onChange={ this.handleInputChange }
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}