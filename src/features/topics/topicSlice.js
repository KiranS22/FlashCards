import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      console.log(state.topics.topics);
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    },
    addQuizId: (state, action) => {
      const { quizId, topicId } = action.payload;
      for(let key in state.topics.topics){
        if(key === topicId){
          state.topics.topics.quizIds.push(quizId)
        }
      }
      // state.topics.id === quizId
    }
  }
});


export const selectTopic = (state) => {
  return state.topics.topics;
};

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
