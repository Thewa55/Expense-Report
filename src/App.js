import React, { useState } from "react";
import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem.component';
import { expenseData } from './util/InitialData.js'
import { Card } from './components/Card/Card.component'


function App() {

  const [initData] = useState(expenseData);

  return (
    <div className="App">
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
