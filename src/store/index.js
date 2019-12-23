import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  type: "SET_TECHNOLOGY",
  text: ""
};
export const store = createStore(reducer, initialState);
