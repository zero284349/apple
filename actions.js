import { TYPES } from "./types";

export const addItem = (value) => {
  return {
    type: TYPES.ADD,
    payload: value
  };
};

export const deleteItem = (id) => {
  return {
    type: TYPES.DELETE,
    payload: id
  };
};