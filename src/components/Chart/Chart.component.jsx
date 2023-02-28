import React from "react";
import ChartBar from '../ChartBar/ChartBar.component'
import './Chart.css';

const Chart = props => {

    console.log(props.dataPoints)
    return (
        <div className="chart">
            { props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} label={dataPoint.label} key={dataPoint.label} maxValue={null} /> )}
        </div>
    )
}

export default Chart;