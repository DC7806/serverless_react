import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Serverless React</Navbar.Brand>
      </Navbar>
    );
  }
}
