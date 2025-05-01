import { useState, useEffect } from "react";
import './App.css';
function App(){
  const[count,setCount]=useState(()=>{
    const save=localStorage.getItem("c");
    return save? parseInt(save):0;
  });
  const increment=()=>{
    setCount(count+1);

  };
  const Decrement=()=>{
    if(count>0){
      setCount(count-1);
    }
  

  };
  useEffect(()=>{
    document.title= `Count: ${count}`;


  },[count]);

  useEffect(()=>{
    localStorage.setItem("c",count);

  },[count])

  return(
    <div className="container">
      <h1 className="Heading" >Counter</h1>
      <p className="count">{count}</p>
      <div className="btn-container">
      <button className="btn-incre" onClick={increment}>Increment</button>
      <button className="btn-dec" onClick={Decrement}>Decrement</button>
      <button className="reset" onClick={()=>setCount(0)}>Reset</button>


      </div>
     
    </div>
  )

}
export default App;