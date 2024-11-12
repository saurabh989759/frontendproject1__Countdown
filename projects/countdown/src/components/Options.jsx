import React from "react";
import Question from "./Question";
export default function Options ({question, answer ,  dispatch}){
    
    return (
        <div style={{display :"flex" , gap :"10px"}}>
        {
            question.options.map((option , index) => {
                return (
                    <button>
                      {option}
                    </button>
                )
            })
        }
        </div>
    )
}