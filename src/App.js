import React, { useState, useEffect } from "react";
import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem.component';
import NewExpense from "./components/NewExpense/NewExpense.component";
import { expenseData } from './util/InitialData.js'
import { Card } from './components/Card/Card.component'


function App() {

  const [initData, setInitData] = useState(expenseData);

  const expenseSubmitted = (expense) => {
    console.log(expense);
    console.log(initData);
    setInitData(prevData => [...prevData, expense]);
  }

  useEffect(() => {
    console.log(initData)
}, [initData])

  return (
    <div className="App">
      <NewExpense submit={expenseSubmitted} />
      <Card className="expenses">
        {initData ? initData.map(data => {
          return (<ExpenseItem initData={data}/>)
          }) : <div>No data</div>
        }
      </Card>
    </div>
  );
}

export default App;
