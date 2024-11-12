import { useEffect, useReducer } from "react";
import QUIZ_DATA from "./data/questions.json"
import Question from "./components/Question";

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
    { status=== 'ready' &&   <Question question = {questions[index]}  index= {index} answer ={answer} dispatch = {dispatch} />}
  </div>

)
}
export default App ;
