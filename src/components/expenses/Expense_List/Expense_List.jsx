import React from "react";
import './Expense_List.css'
import '../expenses_items/Expenses_items'
import Expenses_items from "../expenses_items/Expenses_items";
import New_ExpensesForm from "E:/Full Stack Training/Day5/React/expense-app/src/components/new_expenses/New_ExpenseForm/NewExpenseForm";

const ExpenseList = (props) => {
    const { expense = [] } = props; 

    if(expense.length === 0){
        return <h1>No Exp</h1>
    }

    return(
        <div className="expenses">

        <div className="expenses-list">
            {
                expense.map((eachele)=>
                <Expenses_items
                        date = {eachele.date}
                        amount = {eachele.amount}
                        desc = {eachele.desc}
                        key = {eachele.id}
                    />
                )
            }
        </div>
        </div>
    )
}


export default ExpenseList;