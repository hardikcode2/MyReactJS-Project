import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter,setCounter]= useState(15)

  // let counter = 5

  const addValue = ()=>{
    // console.log("clicked", counter);
    // counter =counter +1
    setCounter(Math.min(counter+1,25))
  }

  const removeValue = ()=>{
    counter =Math.max(counter -1,0)
    setCounter(counter)
  }


  return (
    <>
    <h1>chai or react</h1>
    <h2>counter: {counter}</h2>
    <button
    onClick={addValue}>Add value</button>  
    <br />
    <br />
    <button
    onClick={removeValue}>remove value</button>  
    </>
  )
}

export default App
