import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color={this.props.buttonColor} onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            {this.props.firstname} {this.props.lastname}
          </ModalHeader>
          <ModalBody>
            <div className="ui form">
              <div className="fields">
                <div className="field">
                  <label>First name</label>
                  <input type="text" placeholder="First Name" />
                </div>

                <div className="field">
                  <label>Last name</label>
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="field">
                  <label>E-mail</label>
                  <input type="email" placeholder="Email" />
                </div>
              </div>
              <p>Save changes made to customer details?</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Yes, Go ahead
            </Button>
            <Button onClick={this.props.delUserInput.bind(this, this.props.id)} color="danger">
              Delete Customer
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalPage;
