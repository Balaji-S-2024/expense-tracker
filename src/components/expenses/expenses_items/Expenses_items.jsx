import React, { useState } from 'react'
import './Expense_items.css';
import Expense_Date from '../Expense_Date/Expense_Date'
const Expenses_items = (props) => {



    //Type 2 -> Destructuring to extract datas
    const { id, desc = 'Description', amount = 1000, date } = props;
    const [mamt, setMamt] = useState(amount);
    // mamt = amount;

    return (

        <div>

            <div className="expense-item">

                <Expense_Date
                    date={date}
                />

                <div className="expense-item__description">
                    <h2>{desc}</h2><h2>{id}</h2>
                    <div className="expense-item__price">${mamt}</div>
                    {/* <div><button className="expense-item__price" id='upd' onClick={() => {
                        setMamt('2000')
                    }}>UPDATE</button></div> */}
                </div>

            </div>
        </div>


    )
};

export default Expenses_items;