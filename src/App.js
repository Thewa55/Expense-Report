import React, { useState, useEffect } from "react";
import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem.component';
import NewExpense from "./components/NewExpense/NewExpense.component";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter.component";
import { expenseData } from './util/InitialData.js'
import { Card } from './components/Card/Card.component'


function App() {

  const [initData, setInitData] = useState(expenseData);
  const [filterYears, setFilterYears] = useState([]);
  const [yearSelected, setYearSelected] = useState(0);

  const expenseSubmitted = (expense) => {
    setInitData(prevData => [...prevData, expense]);
    getYear();
  }

  const getYear = () => {
    let years = [...new Set(initData.map(expense => { return expense.date.getFullYear()}))];
    setFilterYears(years.sort((a, b) => a - b));
  }

  const userSelectedYear = (e) => {
    setYearSelected(parseInt(e.target.value));
  }


  let expenseContent = <div>No data</div>;

  if(initData.length > 0){
    expenseContent = initData
      .filter(exp => yearSelected === 0 || exp.date.getFullYear() === yearSelected)
      .map(data => {
      return (<ExpenseItem initData={data} key={data.id}/>)
    })
  }

  useEffect(() => {
    console.log(initData)
    getYear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initData])

  return (
    <div className="App">
      <NewExpense submit={expenseSubmitted} />
      <Card className="expenses">
        <ExpenseFilter years={filterYears} selectedYear={(e) => userSelectedYear(e) }/>
        {expenseContent}
      </Card>
    </div>
  );
}

export default App;
