import uuid from "uuid";
import { GET_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER } from "../actions/types";

const initialState = {
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
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state
      };
    default:
      return state;
  }
}
