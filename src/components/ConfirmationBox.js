import React from "react";

const ConfirmationBox = props => {
    
  return (
  
    <div className="ui active modal">
      <i className="close icon" />
      <div className="header">
        <i className="user icon" />
        {props.customer}
      </div>

      <div className="ui list form">
        <div className="three fields">
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
            <input type="email" placeholder="joe@schmoe.com" />
          </div>
        </div>

        <div className="right floated">
            <p>Save Changes?</p>
        </div>
      </div>

      <div className="actions">
        <div className="ui black deny button">No</div>
        <div className="ui positive right labeled icon button">
          Yes, Save Changes
          <i className="checkmark icon" />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
