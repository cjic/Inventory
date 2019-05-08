import React, { Component } from "react";
import CustomerList from "./components/CustomerList";
import AddItem from "./components/AddItem";

class App extends Component {
  state = {
    customers: [
      {
        firstname: "Daniel",
        lastname: "Louise",
        email: "daniellouise@gmail.com"
      },
      {
        firstname: "Michelle",
        lastname: "Obama",
        email: "michelleobama@whitehouse.com"
      }
    ]
  };

  //Add Item
  addUserInput = (firstname, lastname, email) => {
    const newItem = {
      firstname: firstname,
      lastname: lastname,
      email: email
    };
    this.setState({
      customers: [...this.state.customers, newItem]
    });
  };

  render() {
    return (
      <div className="ui-container-list">
        <header>
          <h1>Inventory App</h1>
        </header>
        
          <CustomerList customers={this.state.customers} />
 
        <AddItem addUserInput={this.addUserInput} />
      </div>
    );
  }
}

export default App;
