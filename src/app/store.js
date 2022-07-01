import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "../features/topics/topicSlice";

export default configureStore({
  reducer: { topics: topicReducer },
});
