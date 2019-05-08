import React, { Component } from "react";
import Listitem from "./Listitem";

class CustomerList extends Component {
  render() {
    return this.props.customers.map(customer => {
      return (
        
        <div className="ui celled list">
          <Listitem customer={customer} />
        </div>
      );

    });
  }
}

export default CustomerList;
