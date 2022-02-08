import { nanoid } from "nanoid";
import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  messages: {
    //room1: [{}],
  },
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            {
              ...action.payload.message,
              time: new Date().toString().slice(4, 25),
              id: nanoid(),
            },
          ],
        },
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };
    case DELETE_CONVERSATION:
      delete state.messages[action.payload];
      return { ...state };
    default:
      return state;
  }
};
