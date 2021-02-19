import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      state = state + action.payload;
      break;
    case "Substract":
      break;
  }
  return state;
};

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log("Store Updated", store.getState());
});

store.dispatch({
  type: "Add",
  payload: 10,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
