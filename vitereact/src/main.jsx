import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        
        <div>
        <h1>custom app | HARDIK CHAI</h1>
        
        
        </div>
        
    )
}

const ReactElem={
    type:'a',
    props:{
        href:'www.google.com',
        target:'_blank'
    },
    children:'click on me to visit google'
}

const anotheruser=" chai or react"

const anotherElement=(
    <a href="www.google.com" target='_blank'>Visit google</a>
)


const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
    // <App/>
  
)
