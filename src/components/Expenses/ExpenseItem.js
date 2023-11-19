import React from 'react'

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//1st way Alternative Approch
// const ExpenseItem = ({ date, amount, title }) => {  //{date,amount,title} this is destructuring

//     return (
//         <div className="expense-item">
//             <div>{date.toISOString()}</div>
//             <div className="expense-item__description">
//                 <h2>{title}</h2>
//                 <div className="expense-item__price">INR {amount}/-</div>
//             </div>
//         </div>
//     );
// }


//1st way
// const ExpenseItem = (props) => {

//     return (
//         <Card className="expense-item">
//             <ExpenseDate date={props.date.toISOString()} />
//             <div className="expense-item__description">
//                 <h2>{props.title}</h2>
//                 <div className="expense-item__price">INR {props.amount}/-</div>
//             </div>
//         </Card>
//     );
// }

//------------>In order to get date in format way:----------->
// const ExpenseItem = (props) => {
//     const month = props.date.toLocaleString('en-US', { month: 'long' });
//     const day = props.date.toLocaleString('en-US', { day: '2-digit' });
//     const year = props.date.getFullYear();

//     return (
//         <div className="expense-item">
//             <div>
//                 <div>{year}</div>
//                 <div>{month}</div>
//                 <div>{day}</div>
//             </div>
//             <div className="expense-item__description">
//                 <h2>{props.title}</h2>
//                 <div className="expense-item__price">INR {props.amount}/-</div>
//             </div>
//         </div>
//     );
// }

//2nd way
// const ExpenseItem = (props) => {

//     return (
//         <div className="expense-item">
//             <ExpenseDate />
//             <div className="expense-item__description">
//                 <h2>{props.expense.title}</h2>
//                 <div className="expense-item__price">INR {props.expense.amount}/-</div>
//             </div>
//         </div>
//     );
// }


const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">INR {props.amount}/-</div>
            </div>
        </Card>
    );
}



export default ExpenseItem
