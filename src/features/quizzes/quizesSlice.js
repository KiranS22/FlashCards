import { createSlice } from "@reduxjs/toolkit";
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      console.log("Action", action);
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        id: id,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      };
    }
  },
  extraReducers: {}
});

export const selectQuizzes = (state) => {
  return state.quizzes.quizzes;
};

export const createNewQuiz = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload));
  };
};

export default quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;
