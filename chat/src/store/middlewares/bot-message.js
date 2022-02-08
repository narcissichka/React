import { SEND_MESSAGE } from "../messages/types";
import { sendMessage } from "../messages";

export const botSendMessage = (store) => (next) => (action) => {
  if (
    action.type === SEND_MESSAGE &&
    action.payload.message.author !== "robot"
  ) {
    setTimeout(() => {
      store.dispatch(
        sendMessage(
          { author: "robot", text: "Bot response from middleware." },
          action.payload.roomId
        )
      );
    }, 1500);
  }

  return next(action);
};
