import { useEffect, useState } from 'react'
import TableList from './TableList'

function App() {
const[search,setSearch] = useState("")
const[date,setDate] = useState("")
const[description,setDescription] = useState("")
const[category,setCategory] = useState("")
const[amount,setAmount] = useState()
  const[data,setData] = useState([])
useEffect(()=>{
  fetch("http://localhost:3000/transactions")
  .then(res=>res.json())
  .then(transactions=>{
    setData(transactions)
  })
},[])
function handleSubmit(e){
  e.preventDefault()
  const transObj={
    date : date,
    description : description,
    category : category, 
    amount : amount
  }

   fetch("http://localhost:3000/transactions",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(transObj)
  })
  .then(res =>res.json())
  .then(transaction=>{
    let newTransactionAdded = [...data,transaction]
    setData(newTransactionAdded)
  })
} 
  return (
    <>
    <h2>The Royal Bank of Flatiron</h2>
    <input type="text" id='input' placeholder='Search your recent Transactions' value={search} onChange={(e)=>setSearch(e.target.value)}/> 
    <form id='inputs'onSubmit={handleSubmit}>
    <input type="date" placeholder='Date' value={date} onChange={(e)=>setDate(e.target.value)}/> 
    <input type="text" placeholder='Description'  value={description} onChange={(e)=>setDescription(e.target.value)}/>
    <input type="text" placeholder='Category'  value={category} onChange={(e)=>setCategory(e.target.value)}/>
    <input type="number" placeholder='Amount'  value={amount} onChange={(e)=>setAmount(e.target.value)} />
    <br />
    <button id='btn' >Add Transaction</button>
    </form>    
    <table>
      <thead>
        <tr>
        <th>no.</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
     {data.map(transaction=>(
      <TableList id={transaction.id} date={transaction.date}  description={transaction.description}   category={transaction.category}  amount={transaction.amount} key={transaction.id}/>
       ))}
       </table>
    </>
  )
}

export default App
