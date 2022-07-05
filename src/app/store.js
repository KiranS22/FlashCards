import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "../features/topics/topicSlice";
import quizReducer from '../features/quizzes/quizesSlice'

export default configureStore({
  reducer: { topics: topicReducer, quizzes:quizReducer },
});
