import { db } from "../../firebase";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});

export const REMOVE_DIALOG = 'MESSAGES::REMOVE_DIALOG';
export const removeDialog = (chatId) => ({
  type: REMOVE_DIALOG,
  chatId,
});

const getPayloadFromSnapshot = (snapshot) => {
  const messages = [];

  snapshot.forEach((mes) => {
    messages.push(mes.val());
  });

  return { chatId: snapshot.key, messages }
}

export const addMessageWithFirebase = (chatId, message) => async () => {
  db.ref("messages").child(chatId).push(message);
};

export const initMessageTracking = () => (dispatch) => {
  db.ref("messages").on("child_changed", (snapshot) => {
    const payload = getPayloadFromSnapshot(snapshot);
    console.log("child changed")
    dispatch(addMessage(payload.chatId, payload.messages));
  });

  db.ref("messages").on("child_added", (snapshot) => {
    const payload = getPayloadFromSnapshot(snapshot);
    console.log("child added")
    dispatch(addMessage(payload.chatId, payload.messages));
  });
}