import React, { useState } from "react";
import './New_ExpenseForm.css'
import 'E:/Full Stack Training/Day5/React/expense-app/src/components/expenses/Expense_List/Expense_List'


const NewExpenseForm = (props) => {
    // let desc = null;
    // let date = null;
    // let amt = null;
    // let person = null;
    
    const {addExp} = props
    
    
    const [date, setDate] =  useState('')
     const [amt, setAmt] = useState('')
     const [person, setPer] =  useState('')
     const [desc, setDesc] =  useState('')


    const onDescChangeHandler = (event) => {
        console.log(event.target.value);
        setDesc(event.target.value)
    }
    const onAmountChangeHandler = (event) => {
        setAmt(event.target.value)
    }
    const onPersonChangeHandler = (event) => {
        setPer(event.target.value)
    }
    const onDateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const onsubmitform = (event) =>{
        console.log('onsub')
        event.preventDefault();
        const newexp = {
            date: new Date(date), amount:amt, desc, id: person
        }
        addExp(newexp);
        console.log(newexp);
    }

    return (
        <div className="n">
            <form  onSubmit={onsubmitform}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="ldate">Date</label>
                        <input type="date" name="date" id="date" value={date} onChange={onDateChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="ldesc">Description</label>
                        <input type="text" name="desc" id="desc" value={desc} onChange={onDescChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="lamt">Amount</label>
                        <input type="number" name="amt" id="amt" min={0} value={amt} onChange={onAmountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="lperson">Person</label>
                        <input type="text" name="person" id="person" value={person} onChange={onPersonChangeHandler} />
                    </div>
                    <div className="new-expense__actions" >
                        <button  value="Cancel" > Cancel</button>
                        <button  value="Add Expense" > Add Expense </button>
                    </div>
                </div>


            </form>
        </div>
    )
}




export default NewExpenseForm;