import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [counter,setCounter]=useState(5)

  const addValue=()=>{
    if(counter<10){
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)

    }else{
      alert("You are prohibited to exceed 10")
    }
  }
  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1)
    }else{
      alert("You are prohibited to go beneath 0")
    }
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value {counter}</h2>
     <button onClick={addValue} >Add value {counter} </button>
     <br />
     <br />
     <button onClick={removeValue} >remove value {counter} </button>
    </>
  )
}

export default App
