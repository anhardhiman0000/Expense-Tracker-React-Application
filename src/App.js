import React from 'react'

// import ExpenseItem from './ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import './App.css';


const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
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
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Books',
      amount: 6000,
      date: new Date(2023, 3, 23)
    },
  ];

  //1st way
  //return (

  //        <div>
  //       <h2>Let's get started!</h2>
  //       <ExpenseItem
  //         title={expenses[0].title}
  //         amount={expenses[0].amount}
  //         date={expenses[0].date}
  //       ></ExpenseItem>
  //       <ExpenseItem
  //         title={expenses[1].title}
  //         amount={expenses[1].amount}
  //         date={expenses[1].date}
  //       ></ExpenseItem>
  //       <ExpenseItem
  //         title={expenses[2].title}
  //         amount={expenses[2].amount}
  //         date={expenses[2].date}
  //       ></ExpenseItem>
  //       <ExpenseItem
  //         title={expenses[3].title}
  //         amount={expenses[3].amount}
  //         date={expenses[3].date}
  //       ></ExpenseItem>
  //     </div>
  //   );
  //   </div> 
  //       );
  // }
  // export default App;

  //2nd way
  //return (

  //        <div>
  //       <h2>Let's get started!</h2>
  //       <ExpenseItem
  //         expense={expenses[0]}
  //       ></ExpenseItem>
  //       <ExpenseItem
  //         expense={expenses[1]}
  //       ></ExpenseItem>
  //       <ExpenseItem
  //        expense={expenses[2]}
  //       ></ExpenseItem>
  //       <ExpenseItem
  //         expense={expenses[3]}
  //       ></ExpenseItem>
  //     </div>
  //   );
  //   </div> 
  //       );
  // }
  // export default App;

  return (

    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div >

  );
}
export default App;