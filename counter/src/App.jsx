import{ useState } from 'react'
import './App.css'

function App() {

  let [ counter,setCounter ] = useState(20);
  
  const addValue = ()=>{
    if(counter < 27){
    setCounter( counter + 1 )
    }
  }

  const removeValue =()=>{
    if(counter >0) {
    setCounter(counter - 1)
    }
  }

  return (
    <>
    <button onClick={addValue}>Add value {counter}</button>
    <br />
    <button onClick={removeValue}>remove value {counter}</button>
    <p>Footer:{counter} </p>
    </>
  )
}

export default App
