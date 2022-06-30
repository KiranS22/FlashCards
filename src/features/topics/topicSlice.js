import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const topicSlice = () => {
  const options ={
    name: 'topics',
    initalState:{
      topics:{}
    },
    reducers:{
      addTopic: (state, action)=>{
        const {name, id, icon}= action.payload;
        state.topics[id]={
          id:id, 
          name: name,
          icon:icon,
          quizIds: []
        };
      },
    }
  
  }
  return (
    <div>topicSlice</div>
  )
}

export default topicSlice