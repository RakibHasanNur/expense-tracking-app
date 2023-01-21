
import React, {useState} from 'react';
import ExpenceDate from './ExpenceDate.js';
import './ExpenceItem.css';
import Card from '../UI/card.js'

const ExpenceItem = (props) => {
    // useState returns an array and in the const array we are distructreing the array.
    // const [title, setTitle] = useState(props.title);
    
    // const clickHandler = () => {
    //     setTitle('Update!');
    // }
    return (
        <li>
            <Card className="expense-item">
            
                <ExpenceDate date = {props.date} ></ExpenceDate>

                {/* iso string just returns a iso formated date string */}
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/* <button onClick = {clickHandler}>Change Title</button> */}
            </Card>
        </li>
    )
}

export default ExpenceItem;