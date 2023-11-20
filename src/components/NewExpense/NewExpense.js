import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import "./NewExpense.css"

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,    //refer ExpenseForm.js code line no. 87 --> 91
            id: Math.random().toString()
        };
        // console.log('expenseData', expenseData)
        props.onAddExpense(expenseData);
        setIsEditing(false)   //Close form after clicking add expense
    };

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    )
}

export default NewExpense
