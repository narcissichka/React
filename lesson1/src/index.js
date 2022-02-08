import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const Message = ({ txt }) => {
  return (
    <div className="message-component">
      <h1>{txt}</h1>
    </div>
  );
};

const App = ({ ...props }) => {
  return (
    <div id="app">
      <Message {...props} />
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App txt="This is text constant in Message component" />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
