import React, { Component } from "react";
import Header from "./components/Header";
import CustomerList from "./components/CustomerList";
import AddItem from "./components/AddItem";
import { Container } from "reactstrap";
import uuid from "uuid";

/******CONNECTING REDUX */
// import { Provider } from "react-redux";
// import store from "./store";
// import { connect } from "react-redux";
// import { getItems } from "../actions/itemActions";

class App extends Component {
  state = {
    customers: [
      {
        id: uuid(),
        firstname: "Daniel",
        lastname: "Louise",
        email: "daniellouise@gmail.com"
      },
      {
        id: uuid(),
        firstname: "Michelle",
        lastname: "Obama",
        email: "michelleobama@whitehouse.com"
      }
    ]
  };

  //Add customer
  addUserInput = (firstname, lastname, email) => {
    const newItem = {
      id: uuid(),
      firstname: firstname,
      lastname: lastname,
      email: email
    };
    this.setState({
      customers: [...this.state.customers, newItem]
    });
  };

  //delete customer
  delUserInput = id => {
    console.log("deleted");
    this.setState({
      customers: [
        ...this.state.customers.filter(customer => customer.id !== id)
      ]
    });
  };

  render() {
    return (
      <Container>
        <Header />

        <CustomerList
          delUserInput={this.delUserInput}
          customers={this.state.customers}
        />

        <AddItem addUserInput={this.addUserInput} />
      </Container>
    );
  }
}

export default App;

/**************** CONNECTING TO REDUX  *******/
// const mapStateToProps = state => ({
//   item: state.item
// });

// export default connect(
//   mapStateToProps,
//   { getItems }
// )(App);
