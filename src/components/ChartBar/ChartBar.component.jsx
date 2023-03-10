import React from "react";
// import './ChartBar.css';
import styled from "styled-components";

const Bar = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

& .chart-bar__inner {
    height: 100%;
    width: 100%;
    border: 1px solid #313131;
    border-radius: 12px;
    background-color: #c3b4f3;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

& .chart-bar__fill {
    background-color: ${props => props.tallest ? 'red' : '#4826b9'};
    width: 100%;
    transition: all 0.3s ease-out;
}

& .chart-bar__label {
    font-weight: bold;
    font-size: 0.5rem;
    text-align: center;
}
`

const ChartBar = props => { 

    let barFillHeight = '0%';
    let tallest = false;

    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value/props.maxValue) * 100) + '%';
        tallest = (barFillHeight === '100%' ? true : false);
    }

    return ( 
        // <div className="chart-bar">
        <Bar tallest={tallest}>
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}>
                </div>   
            </div>
            <div className="chart-bar__label">
                {props.label}
            </div>
        </Bar>
        // </div>
    )
}

export default ChartBar;