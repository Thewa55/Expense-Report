import React from "react";
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={props.selectedYear}>
                    <option value="0"> -None-</option>
                    {props.years.map(year => {
                    return (<option value={year} key={year}>{year}</option>) 
                    })}
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;