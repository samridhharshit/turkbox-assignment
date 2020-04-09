import React from 'react';
import * as d3 from 'd3';
import { Polar } from "react-chartjs-2";

import data from '../covid19-in-india/ICMRTestingDetails.csv';

const DateTime = [];
const TotalSamplesTested = [];
const TotalIndividualsTested = [];
const TotalPositiveCases = [];
d3.csv(data)
    .then(res => {
        console.log(res[0]);

        for (let i = 0; i < res.length - 1; i++) {
            DateTime.push(res[i].DateTime)
        }
        for (let i = 0; i < res.length - 1; i++) {
            TotalSamplesTested.push(parseInt(res[i].TotalSamplesTested))
        }
        for (let i = 0; i < res.length - 1; i++) {
            TotalIndividualsTested.push(parseInt(res[i].TotalIndividualsTested))
        }
        for (let i = 0; i < res.length - 1; i++) {
            TotalPositiveCases.push(parseInt(res[i].TotalPositiveCases))
        }
    })
    .catch(err => {
        console.log(err);

    })

export default class ICMRTestDetails extends React.Component {
    state = {
        chartData: {
            labels:DateTime,
            datasets: [
                {
                    label: "TotalSamplesTested",
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
                    data: TotalSamplesTested,
                    spanGaps: true
                },
                {
                    label: "TotalIndividualsTested",
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
                    data: TotalIndividualsTested,
                    spanGaps: true
                },
                {
                    label: "TotalPositiveCases",
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
                    data: TotalPositiveCases,
                    spanGaps: true
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
                        labelString: 'Results of Tests Conducted',
                        fontSize: 20,
                        fontColor: '#1db954'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Date',
                        fontSize: 20,
                        fontColor: '#1db954'
                    }
                }]
            }
        }
    }
    render() {
        return (
             <div className="row component-row">
                 <Polar
                    data={this.state.chartData}
                    options={this.state.options}
                />
             </div>
        );
    }
}
