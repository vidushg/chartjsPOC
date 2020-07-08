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
datasets: JSONData.datasets,
tooltips: {
    mode: 'label',
    callbacks: {

        title: function(tooltipItem, data) {
            return 'Tooltip';
        },

        
        label: function(tooltipItem, data) {
            return 'Data: ' + tooltipItem.value+' '+tooltipItem.index;
        },
    },
}
}
const options =  {
            title:{
              display:true,
              text:"ChartJS",
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
tooltips: {
    mode: 'label',
    callbacks: {

        title: function(tooltipItem, data) {
            return 'Tooltip';
        },

        
        label: function(tooltipItem, data) {
            return 'Data: ' + JSONData.datasets[0].data[tooltipItem.index].toolTip+' '+tooltipItem.index;
        },
    },
}


}




const element = <div id='root'><Scatter data={data} options = {options} /></div> ;


	return element
}
export default IndexPage


 


