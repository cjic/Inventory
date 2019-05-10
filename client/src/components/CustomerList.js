import React, { Component } from "react";
import Listitem from "./Listitem";

class CustomerList extends Component {
  render() {
    return this.props.customers.map(customer => {
      return (
        
        <div key={customer.id} className="ui celled list">
          <Listitem delUserInput={this.props.delUserInput} customer={customer} />
        </div>
      );

    });
  }
}

export default CustomerList;
