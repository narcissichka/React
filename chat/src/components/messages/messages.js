import {
  useRef,
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import {
  Send,
  ArrowDropDownCircleOutlined,
  CloseSharp,
} from "@mui/icons-material";
import { useStyles } from "./use-styles";
import debounce from "lodash.debounce";
import {
  messagesSelector,
  sendMessage,
  deleteMessage,
} from "../../store/messages";
import { conversationsSelector } from "../../store/conversations";
import { useDispatch, useSelector } from "react-redux";

const Message = ({ message, refWrapper, dispatch }) => {
  const styles = useStyles(message);
  const refMessage = useRef(null);
  const { roomId } = useParams();
  useEffect(() => {
    let block = refWrapper.current;
    let isBottom = block?.scrollTop + window.innerHeight >= block?.scrollHeight;
    if (isBottom) {
      refMessage.current?.scrollIntoView();
    }
  }, [refMessage, refWrapper]);
  const handleDeleteMessage = (event) => {
    dispatch(deleteMessage(message.id, roomId));
  };
  return (
    <div ref={refMessage} className={styles.messageCart}>
      <CloseSharp
        className={styles.delete}
        fontSize="small"
        onClick={handleDeleteMessage}
      />
      <p className={styles.messageCartAuthor}>{message.author}</p>
      <p className={styles.messageCartText}>{message.text}</p>
      <p className={styles.messageCartTime}>{message.time}</p>
    </div>
  );
};

export const MessageList = () => {
  const styles = useStyles();

  const { roomId } = useParams();
  const navigate = useNavigate();

  const messages = useSelector(messagesSelector(roomId));
  const conversations = useSelector(conversationsSelector);
  const dispatch = useDispatch();
  // const [messageList, setMessageList] = useState({});
  const [value, setValue] = useState("");
  const ref = useRef(null);
  const refWrapper = useRef(null);

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };
  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addMessage();
    }
  };
  const addMessage = useCallback(
    (author = "user", botMessage) => {
      if (value || botMessage) {
        dispatch(
          sendMessage({ author: author, text: botMessage || value }, roomId)
        );
        if (!botMessage) setValue("");
      }
    },
    [dispatch, value, roomId]
  );

  useLayoutEffect(() => {
    let block = refWrapper.current;
    document.querySelector(".hidden").setAttribute("visibility", "hidden");
    const cb = debounce(() => {
      let isBottom =
        block?.scrollTop + window.innerHeight >= block?.scrollHeight;
      if (!isBottom) {
        document.querySelector(".hidden").setAttribute("visibility", "visible");
      } else {
        document.querySelector(".hidden").setAttribute("visibility", "hidden");
      }
    }, 200);

    if (refWrapper.current) {
      block?.addEventListener("scroll", cb);
    }

    return () => block?.removeEventListener("scroll", cb);
  }, [refWrapper]);

  useEffect(() => {
    ref.current?.focus();
  }, [ref]);
  useEffect(() => {
    const isValidRoomId = conversations.includes(roomId);

    if (!isValidRoomId && roomId) {
      navigate("/chat");
    }
  }, [roomId, conversations, navigate]);

  useEffect(() => {
    let timer = null;
    if (messages.length && messages[messages.length - 1].author === "user") {
      timer = setTimeout(() => {
        addMessage("robot", "Hi, I am Robot.");
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [messages, roomId, addMessage]);

  return (
    <div className={styles.messageList} ref={refWrapper}>
      <ArrowDropDownCircleOutlined
        fontSize="large"
        className={`${styles.downButton} hidden`}
        onClick={() => {
          refWrapper.current?.scrollTo(0, refWrapper.current?.scrollHeight);
        }}
      />
      {messages.map((message) => (
        <Message
          dispatch={dispatch}
          message={message}
          refWrapper={refWrapper}
          key={message.id}
        />
      ))}
      <div className={styles.messageComponent}>
        <div className={styles.messageForm}>
          <Input
            ref={ref}
            className={styles.input}
            placeholder="Message..."
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
    </div>
  );
};
