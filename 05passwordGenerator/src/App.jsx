import { useState,useCallback,useEffect,useRef } from "react"

function App() {

  const [length, Setlength] = useState(8);

  const[numberAllow,setnumberAllow]= useState(false);

  const [charAllow,setcharAllow]= useState(false);

  const[password,setPassword]= useState("");

  const passwordRef = useRef(null)

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    
   window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(()=>{
let pass =""
let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if (numberAllow) str +="0123456789";
if(charAllow) str += "!@#%^_-`";

for (let i=1; i<= length; i++){
  let char = Math.floor(Math.random() * str.length)
pass += str.charAt(char)

}

setPassword(pass)
  },[length,numberAllow,charAllow,setPassword]);
   
  useEffect(() => {passwordGenerator()}
  ,[length,numberAllow,charAllow,passwordGenerator])

  

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      
<h1 className="text-white text-center">PasswordGenerator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
    
<input type="text"
value={password}
className="outline-none w-full py-1 px-3"
placeholder="password"
readOnly
ref={passwordRef}

/>

<button
onClick={copyPassword}
className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
  Copy</button> 
    </div>

    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
<input type="range"
min={6}
max={100}
value={length}
className="cursor-pointer"
onChange={(e)=> {Setlength(e.target.value)}}
/>
<label>Length: {length}</label>
      </div>
<div className="flex items-center gap-x-1">

  <input type="checkbox"
  defaultChecked={numberAllow}
  id="numberInput"
  onChange={()=>{
    setnumberAllow((prev) => !prev);
  }}
  />
  <label htmlFor="numberInput">Number</label>
</div>



<div className="flex items-center gap-x-1">

  <input type="checkbox"
  defaultChecked={charAllow}
  id="CharInput"
  onChange={()=>{
    setcharAllow((prev) => !prev);
  }}
  />
  <label htmlFor="CharacterInput">Characters</label>
</div>
  







    </div>
    </div>

  )
}

export default App
