import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enterdTitle, setEnterdTitle] = useState('');
    const [enterdAmout, setEnterdAmount] = useState('');
    const [enterdDate, setEnterdDate] = useState('');

    // alternative way
    // const [userInput, setUserInput] = useState({
    //     enterdTitle: '',
    //     enterdDate: '',
    //     enterdAmout: ''     
    // });

    const titleChangeHandler = (event) => {
        setEnterdTitle(event.target.value);
        
        // alternative way with previous State
        // setUserInput((prevState)=>{
        //     return {...prevState, enterdTitle: event.target.value}
        // })
    }
    const amountChangeHandler = (e) => {
        setEnterdAmount (e.target.value);

        // alternative way
        // setUserInput({
        //     ...userInput,
        //     enterdDate: e.target.value 
        // })
    }
    const dateChangeHandler = (e) => {
        setEnterdDate (e.target.value);
        
        // alternative way
        // setUserInput({
        //     ...userInput,
        //     enterdAmout: e.target.value 
        // })
    }
    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enterdTitle,
            amount: enterdAmout,
            date: new Date(enterdDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnterdTitle('');
        setEnterdAmount('');
        setEnterdDate('');
    }


    return (
    <form onSubmit = {submitHandler}>
        <div className= "new-expense__controls">
            <div className= "new-expense__control">
                <label>Title</label>
                <input 
                    type = 'text' 
                    value={enterdTitle} 
                    onChange={titleChangeHandler}>
                </input>
            </div>
            <div className= "new-expense__control">
                <label>Amount</label>
                <input 
                    type = 'number'
                    value={enterdAmout} 
                    min='0.01' 
                    step='0.01' 
                    onChange={amountChangeHandler}>
                </input>
            </div>
            <div className= "new-expense__control">
                <label>Date</label>
                <input 
                    type = 'date'
                    value={enterdDate} 
                    min='2000-01-01' 
                    max='2030-12-01' 
                    onChange={dateChangeHandler}>
                </input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
}
export default ExpenseForm;