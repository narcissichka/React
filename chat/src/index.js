import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const Message = ({ txt, setMessageList }) => {
  const [value, setValue] = useState("");

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const addMessage = (e) => {
    e.preventDefault();
    setMessageList((messageList) => [
      ...messageList,
      { text: value, author: "user" },
    ]);
    setValue("");
  };

  return (
    <div className="message-component">
      <h1 className="heading message-component_heading">{txt}</h1>
      <form onSubmit={addMessage} className="message-form">
        <input
          className="input input_message message-form__input"
          placeholder="Введите Ваше сообщение"
          onChange={handleChangeValue}
          value={value}
        />
        <button
          className="button button_send message-form__button"
          type="submit"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, i) => (
        <div
          className={"message-cart " + message.author + "-message"}
          key={i.toString()}
        >
          <p className="message-cart_author">{message.author}</p>
          <p className="message-cart_text">{message.text}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

const App = ({ ...props }) => {
  const [messageList, setMessageList] = useState([]);

  const robotAnswer = () => {
    setTimeout(() => {
      setMessageList([
        ...messageList,
        {
          text: "К сожалению, пока никто не может Вам ответить. Напишите позже.",
          author: "robot",
        },
      ]);
    }, 1500);
  };

  useEffect(() => {
    if (
      messageList.length &&
      messageList[messageList.length - 1].author === "user"
    ) {
      robotAnswer();
    }
    return () => {};
  }, [messageList]);
  return (
    <div id="app">
      <Message {...props} setMessageList={setMessageList} />
      <MessageList messages={messageList} />
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App txt="Добро пожаловать в чат" />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
