import React, { useState, useEffect, useRef } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./use-styles";

export const Message = ({ setMessageList }) => {
  const styles = useStyles();
  const [value, setValue] = useState("");
  const ref = useRef(null);

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };
  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addMessage();
    }
  };
  const addMessage = (e) => {
    if (value) {
      setMessageList((messageList) => [
        ...messageList,
        {
          text: value,
          author: "user",
          time: new Date().toString().slice(4, 25),
          class: "messageCartUser",
        },
      ]);
      setValue("");
    }
  };
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className={styles.messageComponent}>
      <div className={styles.messageForm}>
        <Input
          ref={ref}
          className={styles.input}
          placeholder="Написать сообщение..."
          onChange={handleChangeValue}
          value={value}
          onKeyPress={handlePressInput}
          endAdornment={
            <InputAdornment position="end">
              <Send className={styles.icon} onClick={addMessage} />
            </InputAdornment>
          }
        />
      </div>
    </div>
  );
};
