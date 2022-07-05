import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "../features/topics/topicSlice";
import quizReducer from "../features/quizzes/quizesSlice";
import cardsReducer from "../features/cards/cardsSlice";

export default configureStore({
  reducer: { topics: topicReducer, quizzes: quizReducer, cards: cardsReducer },
});
