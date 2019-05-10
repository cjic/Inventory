import {
  GET_CUSTOMERS,
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER
} from "./types";

export const getItems = () => {
  return {
    type: GET_CUSTOMERS
  };
};
