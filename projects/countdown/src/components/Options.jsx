import React from "react";
import Question from "./Question";
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
                                answer === question.correctOption ? "correct" : "false" : null}`   }
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