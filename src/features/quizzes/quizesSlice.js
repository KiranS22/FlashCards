import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   quizzes: {}
// }
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers:{
    addQuiz: (state, action)=>{
      const { id , name , topicId ,cardIds} = action.payload;
      state.quizzes[id]={
        id:id,
        name:name,
        topicId: topicId,
        cardIds:cardIds
      }
  }

  }
});

export const selectQuizzes =(state)=>
{
 return  state.quizzes.quizzes

}
export default quizzesSlice.reducer;
export const  {addQuiz} =  quizzesSlice.actions
