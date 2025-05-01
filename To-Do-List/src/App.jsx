import { useEffect } from "react";
import { useState } from "react";
import './App.css'
function App(){
  const[message,setMessage]=useState("");
  const[messages,setMessages]=useState(()=>{
  const save=localStorage.getItem("todo");
  return save? JSON.parse(save):[]});


  const handleInput=(e)=>{
    setMessage(e.target.value);

  };
  const handleAdd=()=>{
    if(message.trim()!=""){
      setMessages([...messages,message]);
      setMessage("");
    }
  };
  const handleDelete=(e)=>{
    const newmsg = messages.filter((_,index)=>index!== e)
    setMessages(newmsg);


  }
  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(messages))
  },[messages]);

  return (
    <div className="container">
      <h1 className="heading">To-Do-List</h1>
  
      <div className="input-group">
        <input className="input" onChange={handleInput} value={message} placeholder="Enter the message" />
        <button className="btn-add" onClick={handleAdd}>Add</button>
      </div>
  
      <div>
        {messages.map((t, index) => (
          <div className="todo-item" key={index}>
            <p>{t}</p>
            <button className="btn-del" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
  
}
export default App;