import { useCallback, useEffect, useState,useRef } from 'react'


function App() {
  const [length ,setlength] = useState(8)
  const[numberAllow,setnumberAllow]= useState(false)
  const [charAllow,setcharAllow]= useState(false)
  const [password,setPassword]= useState('')

  //useRef hook

  const passwordRef = useRef(null)



const passwordGenerator = useCallback(()=>{
  let pass = ''
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
if(numberAllow)str+= '0123456789'
if(charAllow) str+='~!@#$%^&*_-=/?;:}{' 

  for (let i=1; i<=length; i++){
   
   let char= Math.floor(Math.random()*str.length)

  pass += str.charAt(char)
  
  } 
  setPassword(pass)

},[length,numberAllow,charAllow,setPassword])

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
   passwordRef.current?.setSelectionRange(0,330)
window.navigator.clipboard.writeText(password)

},[password])

useEffect(()=>{
passwordGenerator();
},[length,numberAllow,charAllow,passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-700'>
     <h1 className='text-white text-center'>Password Generator</h1>
    
    
    <div className='flex shadow rounded-lg overflow-hidden mb-4 '>

    <input className='outline-none w-full py-1 px-3'
    type='text'
     placeholder='password'
     value={password}
       readOnly
       ref={passwordRef}
       
    />
    

    <button
className='outline-none bg-blue-700 text-white px-3 py-0.5 flex-shrink'
    onClick={copyPasswordToClipboard}>
      copy
      </button>
    </div>

<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
<input type='range'
min={6}
max={100}
value={length}
className='cursor-pointer'
onChange={(e)=>{setlength(e.target.value)}}
/>
<label>Length:{length}</label>


</div>
<div className='flex items-center gap-x-1'>
  <input type='checkbox'
  defaultChecked= {numberAllow}
  onChange={()=>{
    setnumberAllow((prev) => !prev)
  }}
  
  />
  <label>Number</label>

</div>
<div className='flex items-center gap-x-1'>
  <input type='checkbox'
  defaultChecked={charAllow}
  onChange={()=>{
setcharAllow((prev)=> !prev)
  }}
  />
  <label>Character</label>
</div>

</div>
    </div>
  )
}

export default App
