import { useEffect, useReducer } from "react";
import QUIZ_DATA from "./data/questions.json"

const initialState ={
  questions :[] , 
  status : "loading" , 
  index : 0 ,
  answer : null ,
  secondsRemaining : null , 
}

const reducer = (state , action) => {
    switch(action.type){
      case 'dataRecieved' :
      return {
        ...state ,
        questions : action.payload ,
        status :'ready'
      }
    }
}
function App() {
  const [{questions , status , index , answer  , secondsRemaining} , dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({type : 'dataRecieved' , payload : QUIZ_DATA.questions}) ; 
  }, [])
  return (
  <div>Hello recact interview questions 
      <ul>
        {
          questions.map((question , index) => {
            return <li>{question.question}</li>
          })
        }
      </ul>
  </div>

)
}
export default App ;
