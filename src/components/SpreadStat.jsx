import React from 'react';
import * as d3 from 'd3';
import { Bar } from "react-chartjs-2";

import data from '../covid19-in-india/AgeGroupDetails.csv';

const labels = [];
const dataset = [];
d3.csv(data)
    .then(res => {
        // console.log(res);

        for (let i = 0; i < res.length - 1; i++) {
            labels.push(parseInt(res[i].AgeGroup))
        }
        for (let i = 0; i < res.length - 1; i++) {
            dataset.push(parseInt(res[i].TotalCases))
        }
        // console.log(dataPoints);
    })
    .catch(err => {
        console.log(err);

    })

export default class SpreadStat extends React.Component {
    state = {
        chartData: {
            labels: labels,
            datasets: [
                {
                    label: "Total cases Count",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(225,0,0,0.4)",
                    borderColor: "red", // The main line color
                    borderCapStyle: 'square',
                    borderDash: [], // try [5, 15] for instance
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: "yellow",
                    pointHoverBorderColor: "brown",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,
                    data: dataset,
                    
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Spread Stat by Age',
                fontSize: 25
            },
            legend: {
                display: false,
                position: 'bottom'
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Total Cases',
                        fontSize: 20,
                        fontColor: '#1db954'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Age Group',
                        fontSize: 20,
                        fontColor: '#1db954'
                    }
                }]
            }
        }
    }

    componentDidMount() {
        console.log(this.state);
    }

    render() {
        return (
            <div className="row component-row">
                <div className="col-sm-12 component-container">
                    <Bar
                        data={this.state.chartData}
                        options={this.state.options}
                    />
                </div>
            </div>
        );
    }
}
