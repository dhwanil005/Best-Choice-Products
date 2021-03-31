import { ADD_TRANSACTIONS, DELETE_TRANSACTIONS } from "./types";

export const addTransaction = ({ id, pid, title, price, image, quantity }) => (
  dispatch
) => {
  const newTransaction = {
    id,
    pid,
    title,
    price,
    image,
    quantity,
  };
  dispatch({ type: ADD_TRANSACTIONS, payload: newTransaction });
};

export const deleteTransactions = (id) => (dispatch) => {
  dispatch({ type: DELETE_TRANSACTIONS, payload: id });
};
