import React from "react";
import ChartBar from '../ChartBar/ChartBar.component'
import './Chart.css';

const Chart = props => {

    return (
        <div className="chart">
            { props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} label={dataPoint.label} key={dataPoint.label} maxValue={props.maxValue} /> )}
        </div>
    )
}

export default Chart;