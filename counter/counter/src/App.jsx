import React ,{useState} from "react";
function App(){
  const [counter,setCounter]= useState(0);

  return (<div>
      <h1>Counter:{counter}</h1>
      <button onClick={()=> counter<20 && setCounter(counter+1)}>Increase</button>
<button onClick={()=> counter>0 && setCounter(counter-1)}>Decrease</button>

  </div>)
}
export default App