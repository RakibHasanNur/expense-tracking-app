  
import React, {useState} from 'react';
import ExpenceItem from './ExpenceItem.js';
import ExpensesFilter from './ExpensesFilter.js';
import './Expences.css';
import Card from '../UI/card.js';
import ExpensesList from './ExpensesList.js';
import ExpenseChart from './ExpensesChart.js';

const Expenses = (props) => {

  const [filteredYear, setFilterdYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  }

  // filter is a js method
  const filterdExpenses = props.items.filter (expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  
  return (
    <Card className="expenses">
      <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}>
      </ExpensesFilter>
      {/* used turnary opartor so that we can set up something when there's no filterdExpeses */}
      <ExpenseChart expenses={filterdExpenses}></ExpenseChart>
      {<ExpensesList items={filterdExpenses}></ExpensesList>}

      {/* initially the rendering process of ExpenseItem was this */}
      {/* <ExpenceItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenceItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenceItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenceItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}

    </Card>
  );
}

export default Expenses;