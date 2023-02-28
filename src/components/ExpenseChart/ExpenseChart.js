import React from "react";
import Chart from '../Chart/Chart.component';
// import { chartDataPoints } from "../../util/ChartDataPoints";

const ExpenseChart = props => {

    const chartDataPoints = [{ label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 } ]


    props.expenses.forEach( expense => {
        const expenseMonth = expense.date.toLocaleString('en-US', {month: 'short'});
        const index = chartDataPoints.findIndex(data => {return data.label === expenseMonth});
        // console.log(expenseMonth);        
        // console.log(index);
        chartDataPoints[index].value += expense.amount;
        console.log(expenseMonth);
        console.log(chartDataPoints[index].value);
    })

    
    return(
        <div>
            <Chart dataPoints={chartDataPoints}/>
        </div>

    )
}

export default ExpenseChart;