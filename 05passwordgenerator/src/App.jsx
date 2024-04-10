import { useState ,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length,setlength]=useState(8)
  const[numallow,setnumallow]=useState(false);
  const[charallow,setcharallow]=useState(false)
  const[password,setpassword]=useState("")

//useRef hook
  const PasswordRef=useRef(null)


  const passwordGenerator =  useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      
  if (numallow) str+="012345789"
  if (charallow) str+="!@#$%^&*()_+-={}[]|\<>,.?/~"

    for (let i = 0; i <= length; i++) {
      let char =Math.floor(Math.random() *str.length+1)
      pass+=str.charAt(char)
    }

  

  setpassword(pass)

  },[length,numallow,charallow,setpassword])

  const copyPasswordToClipboard=useCallback(()=>{
    PasswordRef.current?.select()
    PasswordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{passwordGenerator()},[length,charallow,numallow,passwordGenerator])



  return (
    <>
     
     <div className='w-full max-w-md mx-auto bg-gray-800 rounded-lg shadow-md px-4 py-6 my-8'>
  <h1 className='text-4xl text-white py-2 mb-2 text-center'>Password Generator</h1>
  <div className='flex mb-4 overflow-hidden rounded-lg shadow'>
    <input
      type='text'
      value={password}
      readOnly
      placeholder='Password'
      ref={PasswordRef}
      className='w-full px-3 py-1 outline-none'
    />
    <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>Copy</button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
     <input
     type='range'
     min={6}
     max={100}
     value={length}
     className='cursor-pointer'
     onChange={(e)=>{setlength(e.target.value)}}
     /> 
     <label className='text-orange-400'>Length :{length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
    <input
     type='checkbox'
    
     defaultChecked={numallow}
     id='numberInput'
     onChange={()=>{
      setnumallow((prev)=>!prev);
     }}
     /> 
     <label htmlFor='numberInput' className='text-orange-400'>Numbers</label>
    </div>

    <div className='flex items-center gap-x-1'>
    <input
     type='checkbox'
     
     defaultChecked={charallow}
     id='characterInput'
     onChange={()=>{
      setcharallow((prev)=>!prev);
     }}
     /> 
     <label htmlFor='charInput' className='text-orange-400'>Characters</label>
    </div>
  </div>
</div>


    
    </>
  )
}

export default App
