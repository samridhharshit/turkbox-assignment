import React from 'react';
import * as d3 from 'd3';
import { Bar } from "react-chartjs-2";

import data from '../covid19-in-india/HospitalBedsIndia.csv';

const NumPrimaryHealthCenters_HMIS = [];
const NumCommunityHealthCenters_HMIS = [];
const NumSubDistrictHospitals_HMIS = [];
const NumDistrictHospitals_HMIS = [];
const TotalPublicHealthFacilities_HMIS = [];

d3.csv(data)
    .then(res => {
        console.log(res[0]);

        for (let i = 0; i < res.length - 1; i++) {
            NumPrimaryHealthCenters_HMIS.push(parseInt(res[i].NumPrimaryHealthCenters_HMIS))
        }
        for (let i = 0; i < res.length - 1; i++) {
            NumCommunityHealthCenters_HMIS.push(parseInt(res[i].NumCommunityHealthCenters_HMIS))
        }
        for (let i = 0; i < res.length - 1; i++) {
            NumSubDistrictHospitals_HMIS.push(parseInt(res[i].NumSubDistrictHospitals_HMIS))
        }
        for (let i = 0; i < res.length - 1; i++) {
            NumDistrictHospitals_HMIS.push(parseInt(res[i].NumDistrictHospitals_HMIS))
        }
        for (let i = 0; i < res.length - 1; i++) {
            TotalPublicHealthFacilities_HMIS.push(parseInt(res[i].TotalPublicHealthFacilities_HMIS))
        }
    })
    .catch(err => {
        console.log(err);

    })

export default class HospitableBeds extends React.Component {
    state = {
        chartData: {
            labels: ["Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"],
            datasets: [
                {
                    label: "NumPrimaryHealthCenters_HMIS",
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
                    data: NumPrimaryHealthCenters_HMIS,
                    spanGaps: true

                },
                {
                    label: "NumCommunityHealthCenters_HMIS",
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
                    data: NumCommunityHealthCenters_HMIS,
                    spanGaps: true
                },
                {
                    label: "NumSubDistrictHospitals_HMIS",
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
                    data: NumSubDistrictHospitals_HMIS,
                    spanGaps: true
                },
                {
                    label: "NumDistrictHospitals_HMIS",
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
                    data: NumDistrictHospitals_HMIS,
                    spanGaps: true
                },
                {
                    label: "TotalPublicHealthFacilities_HMIS",
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
                    data: TotalPublicHealthFacilities_HMIS,
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
                    ticks: {
                        min: 0,
                        max: 4200,
                        stepSize: 100
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Various Facilities',
                        fontSize: 20,
                        fontColor: '#1db954'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'State',
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
                <Bar
                    data={this.state.chartData}
                    options={this.state.options}
                />
            </div>
        );
    }
}
