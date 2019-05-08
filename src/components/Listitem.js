import React, { Component } from "react";

class Listitem extends Component {
  render() {
    const { firstname, lastname, email } = this.props.customer;

    return (
      <div className="item">
        <div className="right floated content">
          <button className="ui button">Edit</button>
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

// const Listitem = props => {

//   return (
//     <div className="item">
//       <i className="user icon" />
//       <div className="content">
//         <a href="/" className="header">
//           {props.customer}
//         </a>

//         <p className="description">{props.email}</p>
//       </div>
//     </div>
//   );
// };

export default Listitem;
