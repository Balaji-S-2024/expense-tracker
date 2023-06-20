import React from "react"
import './Expense_Date.css';

const Expense_Date = (props) => {
    const {date} = props;
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: 'numeric' });
    const year = date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}
export default Expense_Date;