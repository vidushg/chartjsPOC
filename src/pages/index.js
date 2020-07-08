import React from "react"
import { Link } from "gatsby"
import ReactDOM from 'react-dom'


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {Chart, canvas} from "chart.js"
import {Line, Scatter} from "react-chartjs-2"
import JSONData from "../content/data.json"


const IndexPage = () => {


const data = {

labels: JSONData.labels,
datasets: JSONData.datasets

}

const dataOG = {
 labels: ['Scatter'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointBorderColor: 'rgba(36,3,3,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 65, y: 75 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
      ]
    }
  ]
};

const element = <div id='root'><Scatter data={data} options={{
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


 


