import React from "react";
import { useStyles } from "./use-styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";
export const Application = ({ chats, messages }) => {
  const styles = useStyles();
  return (
    <div id="app">
      <Link className={styles.link} to={"/"}>
        <HomeOutlinedIcon fontSize="large" />
      </Link>
      <h1 className={styles.heading}>Chat</h1>
      <div className={styles.wrapper}>
        <div className={styles.chats}>{chats}</div>
        <div className={styles.messages}>{messages}</div>
      </div>
    </div>
  );
};
