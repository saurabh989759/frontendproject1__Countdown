import React from "react";
import Question from "./Question";
import "./Options.css";
export default function Options ({question, answer ,  dispatch}){
    const hasAnswered = answer !== null ;
    return (
        <div style={{display :"flex" , gap :"10px"}}>
        {
            question.options.map((option , index) => {
                return (
                    <button 
                        className= {
                            `${
                                hasAnswered ?
                                index === question.correctOption ? "correct" : "wrong" : ""}`   }
                        onClick={() => {dispatch({type : "newAnswer" , payload : index})}}
                        >
                      {option}

                    </button>
                )
            })
        }
        </div>
    )
}