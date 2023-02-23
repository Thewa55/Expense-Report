import React, { useState, useEffect } from "react";
import './App.css';
import ExpenseItem from './components/ExpenseItem.component';
import { expenseData } from './util/InitialData.js'


function App() {

  const [initData] = useState(expenseData);

  return (
    <div className="App">
      {initData ? initData.map(data => {
        return (<ExpenseItem initData={data}/>)
      }) : <div>No data</div>
    }
    </div>
  );
}

export default App;
