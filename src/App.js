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
  const [filteredData, setFilteredData] = useState(expenseData);

  const expenseSubmitted = (expense) => {
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
    let dataSelected = initData.filter(exp => incomingYear === 0 || exp.date.getFullYear() === incomingYear);
    setFilteredData(dataSelected);
  }


  let expenseContent = <div>No data</div>;

  // if(initData.length > 0){
  //   expenseContent = initData
  //     .filter(exp => yearSelected === 0 || exp.date.getFullYear() === yearSelected)
  //     .map(data => {
  //     return (<ExpenseItem initData={data} key={data.id}/>)
  //   })
  // }

  if(filteredData.length > 0){
    expenseContent = filteredData
      .map(data => {
      return (<ExpenseItem initData={data} key={data.id}/>)
    })
  }

  useEffect(() => {
    // console.log('yearSelected: ', yearSelected)
    // console.log(initData)
    // console.log('filteredData: ',filteredData);
    getYear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initData, filteredData, yearSelected])

  return (
    <div className="App">
      <NewExpense submit={expenseSubmitted} />
      <ExpenseChart expenses={filteredData} yearSelected={yearSelected}/>
      <Card className="expenses">
        <ExpenseFilter years={filterYears} selectedYear={(e) => userSelectedYear(e) }/>
        {expenseContent}
      </Card>
    </div>
  );
}

export default App;
