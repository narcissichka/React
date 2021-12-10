import { db } from "./firebase";

export const getSessionApi = () => db.ref("profile").child("userInfo").get();
export const getSubmitApi = () => db.ref("profile").child("submit").get();
export const addInfoToSessionApi = (field, value) => {
  return db
    .ref("profile")
    .child("userInfo")
    .push({ [field]: value });
};
export const setSubmitApi = (value) => {
  return db.ref("profile").child("submit").set(value);
};
