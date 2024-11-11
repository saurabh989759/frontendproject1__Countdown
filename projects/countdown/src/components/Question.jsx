import React from "react";
import Options from "./Options";
export default function Question ({question , index , answer , dispatch }){
    return (
        <div>
          <h3>{question.question}</h3>
          <Options options = {question.options} answer = {answer} dispatch = {dispatch} />
        </div>
    )
}