import React, { Component } from "react";
import ModalPage from "./ModalPage";

class Listitem extends Component {
  render() {
    const { id, firstname, lastname, email } = this.props.customer;

    return (
      <div className="item">
    
        <div className="right floated content">
          <ModalPage
            buttonLabel="Edit"
            id={id}
            firstname={firstname}
            lastname={lastname}
            delUserInput={this.props.delUserInput}
          />
        </div>
        <i className="user icon" />
        <div className="content">
          <a href="/" className="header">
            {firstname} {lastname}
          </a>

          <p className="description">{email}</p>
        </div>
      </div>
    );
  }
}

export default Listitem;
