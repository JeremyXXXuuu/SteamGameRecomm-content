// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App.js";

// import { Provider } from "react-redux";
// import store from "./store";
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

import { createRoot } from "react-dom/client";
import store from "./store";
import App from "./App.js";
import { Provider } from "react-redux";
const container = document.getElementById("root");
const root = createRoot(container);
// createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
