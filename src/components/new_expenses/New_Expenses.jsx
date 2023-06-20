import React from "react";
import './New_Expenses.css';
import New_ExpenseForm from './New_ExpenseForm/NewExpenseForm'

const NewExpense = (props) => {
    const {addList} = props
    const addExp = (newexp) =>{
        addList(newexp);
    }

    return (
        <div className="new-expense">
            <New_ExpenseForm addExp = {addExp} />
        </div>
     )
}


export default NewExpense;