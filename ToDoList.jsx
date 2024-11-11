
import React ,{useState} from "react"

function ToDoList(){
const[tasks,setTasks]= useState([]);
const[newTask,setNewTask] = useState('');

function handleInputChange(event){
    setNewTask(event.target.value);

}
function addTask(){
if (newTask.trim() !=="")
setTasks(t=>[...t,newTask]);
setNewTask("")
}

function deleteTask(index){
    const updatedTasks = tasks.filter((_,i)=> i !== index);
     setTasks(updatedTasks)

}

function moveTaskup(index){
if(index >0){
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index -1]] =[
    updatedTasks[index-1],
    updatedTasks[index],
    ];

    setTasks(updatedTasks);
}
}
function moveTaskdown(index){
    if(index <tasks.length-1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index +1]] =[
        updatedTasks[index +1],
        updatedTasks[index]
    ];
        setTasks(updatedTasks);
}
}
return (<div className="to-do-list">
    <h1>To-Do-List</h1>

    <div>
        <input type="text"
        placeholder="Enter a Task.."
        value={newTask}
        onChange={handleInputChange}
        />
        <button className="add-button"
        onClick={addTask}
        
        >
            Add
        </button>
    </div>
    <ol>
       {tasks.map((task,index)=>
       <li key={index}>

       <span className="text">{task}</span>
     <button className="delete-button"
     onClick={()=> deleteTask(index)}>
     
        
        Delete
     </button>
      <button className="move-button"
     onClick={()=> moveTaskup(index)}
     >
        
        Up
     </button>
 <button className="move-button"
     onClick={()=> moveTaskdown(index)}
     >
        
        Down
     </button>


       </li>
    )} 
   </ol>
   
</div>)
}
export default ToDoList













// body{
//     background-color: hsl(0, 0%, 10%);
// }


// .to-do-list{
//     font-family: Arial, Helvetica, sans-serif;
//     text-align: center;
//     margin-top: 100px;

// }
// h1{
//     font-size: 4rem;
//     color: white;
// }
// button{
//     font-size: 1.7rem;
//     font-weight: bold;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background-color 0.5s ease ;   
// }
// .add-button{
//     background-color: hsl(125, 47%, 44%);
// }
// .add-button:hover{
//     background-color: hsl(125, 47%, 44%);
// }
// .delete-button{
//     background-color: hsl(10, 90%, 50%);
// }
// .delete-button:hover{
//     background-color: hsl(10, 90%, 40%);
// }
// .move-button{
//     background-color: hsl(207, 90%, 64%);
// }
// .move-button:hover{
//     background-color: hsl(204, 90%, 54%);
// }
// input[type="text"]{
//     font-size:1.6rem;
//     padding: 10px;
//     border: 2px solid hsl(0,0,0.5);
//     border-radius: 5px;
//     color: rgba(59, 5, 158, 0.836);
// }
// ol{
//     padding: 0;
// }
// li{
//     font-size: 2rem;
//     font-weight: bold;
//     padding: 15px;
//     background-color: hsl(0, 0%, 97%);
//     margin-bottom: 10px;
//     border: 3px solid hsla(0, 0%, 85%, 0.5);
//     border-radius: 5px;
//     display: flex;
//     align-items: center;

// }
// .text{
// flex:1;


// }
// .delete-button, .move-button{
//     padding: 8px 12px;
//     font-size: 1.4rem;
//     margin-left: 10px;
// }