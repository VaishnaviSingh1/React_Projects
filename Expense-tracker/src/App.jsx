import { useState,useEffect } from "react";
function App(){
  const[description,setDescription]=useState("");
  const[amount,setAmount]=useState("");

  const[expense,setExpense]=useState([]);
  const[total,setTotal]=useState(0);
  const handleAddExpense=(e)=>{
    e.preventDefault();
    if(description && amount){
      const newExpense={description,amount};
      setExpense([...expense,newExpense]);
      setDescription("");
      setAmount("");
    }
  }
    useEffect(()=>{
      const TotalAmount = expense.reduce((sum,item)=>sum+ parseFloat(item.amount),0);
      setTotal(TotalAmount);


    },[expense])



  


  return(<div>
    <h1 className="heading">Expense Tracker</h1>
    <form onSubmit={handleAddExpense}>
      <input value={description} onChange={(e)=>setDescription(e.target.value)}
      placeholder="Add Item"/>
      <input value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Amout"/>
      <button type="Submit">Add</button>

    </form>
   <div>
    {expense.map((i,index)=>(
      <p key={index}>
        {i.description}: ${i.amount}

      </p>

    ))}
    <h2>
      Total: ${total}
    </h2>
   </div>
   


  </div>
  )
};
export default App;