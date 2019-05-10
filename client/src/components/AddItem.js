import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      firstname: "",
      lastname: "",
      email: ""
    };
  }

  submitInput = e => {
    e.preventDefault();
    this.props.addUserInput(
      this.state.firstname,
      this.state.lastname,
      this.state.email
    );

    this.setState({
      id: "",
      firstname: "",
      lastname: "",
      email: ""
    });
  };

  inputChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    return (
      <form onSubmit={this.submitInput} className="ui form">
        <div key={this.state.id} className="three fields">
          <div className="field">
            <label>First name</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={this.state.firstname}
              onChange={this.inputChange}
            />
          </div>
          <div className="field">
            <label>Last name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={this.inputChange}
            />
          </div>
          <div className="field">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="joe@schmoe.com"
              value={this.state.email}
              onChange={this.inputChange}
            />
          </div>
        </div>
        <button type="Submit" value="Submit" className="ui submit button">
          Submit
        </button>
      </form>
    );
  }
}

export default AddItem;
