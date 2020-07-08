import React from "react"
import { Link } from "gatsby"
import ReactDOM from 'react-dom'


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {Chart, canvas} from "chart.js"
import {Line} from "react-chartjs-2"



const IndexPage = () => {

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [25, 59, 80, 11, 56, 95, 40]
    }
  ]
};

const element = <div id='root'><Line data={data} options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }} /></div> ;


	return element
}
export default IndexPage


 


