import React, {useState} from 'react';
import Expences from './Components/Expenses/Expences';
import NewExpense from './Components/NewExpenses/NewExpenses';

  // a variable for the ExpenceItem component
  const InitialExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.9, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ]
  
function App() {
  // setting up useState
  const [expenses, setExpenses] = useState(InitialExpenses);
  
// setting up addExpenseHandler
  const addExpenseHandler = (expense) => {
    setExpenses ( previousExpenses => {
      return [expense, ...previousExpenses]
    });
    console.log('this is coming from app')
  };

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}></NewExpense>
      <Expences items={expenses} />
    </div>
  );
}

export default App;