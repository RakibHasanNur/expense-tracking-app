import React from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

    const saveExpenseDataHandler = (parameter) => {
        const expenseData = {
            ...parameter,
            id: Math.floor(Math.random() * 100)
        };
        props.addExpense(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
}
export default NewExpense;