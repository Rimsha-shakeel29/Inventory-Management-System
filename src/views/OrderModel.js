
import {Button, Modal} from 'react-bootstrap';
import { Input } from 'reactstrap';
import React, { Component } from 'react'

export default class CreateTicket extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
    }
  }
 
  nameChange = (e) => {
    this.setState({name: e.target.value});
  }

  reg = () => {
    this.props.create(this.state.name);
  }

render() {
  return(
    <div>
      <Modal show={this.props.showVal} onHide={this.props.show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Get a New API Token</Modal.Title>
        </Modal.Header>
        <Modal.Body>Pick a Name (for your record only)!</Modal.Body>
        {/* <Modal.Footer>
          <Input variant="secondary" value={this.state.name} onChange={this.nameChange} />
          <Button variant="primary" onClick={this.reg}>
            Create
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
}
