import React, { useState, useEffect } from "react";
import { Message } from "./message";
import { MessageList } from "./message-list";
import {ChatBar} from "./chat-bar";
import { useStyles } from "./use-styles";
export const Application = () => {
  const styles = useStyles();
  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    let timer = null;
    if (
      messageList.length &&
      messageList[messageList.length - 1].author === "user"
    ) {
      timer = setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            text: "К сожалению, пока никто не может Вам ответить. Напишите позже.",
            author: "robot",
            time: new Date().toString().slice(4, 25),
            class: "messageCartRobot",
          },
        ]);
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [messageList]);
  return (
    <div className={styles.wrapper} id="app">
    <ChatBar />
      <MessageList messages={messageList} />
      <Message setMessageList={setMessageList} />
    </div>
  );
};
