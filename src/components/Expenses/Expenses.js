import React from 'react'

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
        </Card>
    );
}

export default Expenses;

// import React from 'react'

// import ExpenseItem from './ExpenseItem';

// const Data = () => {
//     const expenses = [
//         {
//             id: 'e1',
//             title: 'Toilet Paper',
//             amount: 94.12,
//             date: new Date(2020, 7, 14),
//         },
//         {
//             id: 'e2',
//             title: 'New TV',
//             amount: 799.49,
//             date: new Date(2021, 2, 12)
//         },
//         {
//             id: 'e3',
//             title: 'Car Insurance',
//             amount: 294.67,
//             date: new Date(2021, 2, 28),
//         },
//         {
//             id: 'e4',
//             title: 'New Desk (Wooden)',
//             amount: 450,
//             date: new Date(2021, 5, 12),
//         },
//         {
//             id: 'e5',
//             title: 'Books',
//             amount: 6000,
//             date: new Date(2023, 3, 23)
//         },
//     ];
//     return (

//         // <div >
//         //   <expense={expenses[0]} />
//         //   <expense={expenses[1]} />
//         //   <expense={expenses[2]} />
//         //   <expense={expenses[3]} />
//         //   <expense={expenses[4]} />
//         // </div>

//         <div>
//             <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
//             <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
//             <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
//             <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
//             <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date} />
//         </div>
//     )
// }

// export default Data
