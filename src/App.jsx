import { useState } from 'react'
import './App.css'
import New_Expenses from './components/new_expenses/New_Expenses'
import Expenses_List from './components/expenses/Expense_List/Expense_List'

const DUMMY_DATA = [
  {
    id: 'KavinRaj',
    desc: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'KavinKumar', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'Azeemudeen',
    desc: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'Kavinesh',
    desc: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  
  const [expenses,setExpenses] = useState(DUMMY_DATA)

  
  const addList = (newexp)=>{
    setExpenses(()=>[newexp,...expenses])  
    console.log(newexp);  
    console.log(expenses);  
  }

  return (
    <div className="App">
      
      <New_Expenses
          addList = {addList}
      />

        <Expenses_List
          expense = {expenses}
        />
    </div>
  )
}

export default App
//reference
{/* <Expenses_items
  // obj = {DUMMY_DATA}
  id = {DUMMY_DATA[0].id}
  desc = {DUMMY_DATA[0].desc}
  amt = {DUMMY_DATA[0].amount}
  date = {DUMMY_DATA[0].date}
/> */}
{/* <Expenses_items
date = {new Date().toLocaleDateString()}
desc = {'Food'}
amt = {1000}
// id = {DUMMY_DATA[0].id}
// desc = {DUMMY_DATA[0].desc}
// amt = {DUMMY_DATA[0].amount}
// date = {DUMMY_DATA[0].date}
/> */}

//Try Panathu
// {
//   DUMMY_DATA.map((data)=>{
  //     return <Expenses_items
//       id = {data.id}
//       desc = {data.date}
//       amount = {data.amount}
//       date = {data.date}
    
//     />
//   })
// }
// {
  



// /* {
//     DUMMY_DATA.map( data =>
//       <Expenses_items
//       id = {data.id}
//       desc = {data.desc}
//       amt = {data.amount}
//       date = {data.date}
      
//       />)
// } */}