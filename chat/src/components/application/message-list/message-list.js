import {useRef, useEffect} from "react";
import { memo } from "react";
import { useStyles } from "./use-styles";
// import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

const Mes = ({ message }) => {
  const styles = useStyles(message);
   const ref = useRef(null);
  useEffect(()=>{
  ref.current?.scrollIntoView();
  }, [ref]);
  return (
    <div ref={ref} className={styles.messageCart}>
      <p className={styles.messageCartAuthor}>{message.author}</p>
      <p className={styles.messageCartText}>{message.text}</p>
      <p className={styles.messageCartTime}>{message.time}</p>
    </div>
  );
};
export const MessageList = memo(({ messages }) => {
const styles = useStyles();
  return (
    <div className={styles.messageList}>
    {/* <KeyboardArrowDownSharpIcon className={styles.downButton} /> */}
      {messages.map((message, i) => (
        <Mes message={message} key={i.toString()} />
      ))}
    </div>
  );
});
