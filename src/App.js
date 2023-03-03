import React, { useState, useEffect } from "react";
import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem.component';
import NewExpense from "./components/NewExpense/NewExpense.component";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter.component";
import ExpenseChart from "./components/ExpenseChart/ExpenseChart";
import { expenseData } from './util/InitialData.js'
import { Card } from './components/Card/Card.component'


function App() {

  const [initData, setInitData] = useState(expenseData);
  const [filterYears, setFilterYears] = useState([]);
  const [yearSelected, setYearSelected] = useState(0);

  const expenseSubmitted = (expense) => {
    console.log(expense);
    setInitData(prevData => [...prevData, expense]);
    getYear();
  }

  const getYear = () => {
    let years = [...new Set(initData.map(expense => { return expense.date.getFullYear()}))];
    setFilterYears(years.sort((a, b) => a - b));
  }

  const userSelectedYear = (e) => {
    let incomingYear = parseInt(e.target.value);
    setYearSelected(incomingYear);
  }

  let expenseContent = <div>No data</div>;
  let expenseChart =  <div>No data</div>;

  if(initData.length > 0){
    let filteredExpenses = initData.filter(exp => yearSelected === 0 || exp.date.getFullYear() === yearSelected)
    expenseContent = filteredExpenses.map(data => { return (<ExpenseItem initData={data} key={data.id}/>)})
    expenseChart = <ExpenseChart expenses={filteredExpenses} yearSelected={yearSelected}/>
  }

  useEffect(() => {
    getYear();
    console.log(initData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initData, yearSelected])

  return (
    <div className="App">
      <NewExpense submit={expenseSubmitted} />
      <Card className="expenses">
        <ExpenseFilter years={filterYears} selectedYear={(e) => userSelectedYear(e) }/>
        {/* <ExpenseChart expenses={filteredData} yearSelected={yearSelected}/> */}
        {expenseChart}
        {expenseContent}
      </Card>
    </div>
  );
}

export default App;
