import {Component} from "react"
import ServiceItem from "../ServiceItem"

import "./index.css"
 const servicesDetails = [
    {
        id:0,
        title:"High Speed Internet",
        description:"Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1731057587/th_o8jqnk.jpg",
    },
    {
        id:1,
        title:"Healthy Meals",
        description:"A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere.",
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1731059005/separate-layered-hamburger-linear-logo-600nw-1654061194_yyxkpv.jpg"
    },
     {
        id:2,
        title:"Homely Stay",
        description:"Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1731059068/360_F_510393110_ckpPNgudTucs4JkOdRG7jrWd1eWxJqnO_pxqqlt.jpg"
    },
    {
        id:3,
        title:"Transportation",
        description:"Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1731057822/car-icon-png-25_owzwcr.png"
    },
     {
        id:4,
        title:"Food Delivery",
        description:"Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1731057882/2-20774_cycling-bike-lane-logo-png_pmzhwf.jpg"
    },
    {
        id:5,
        title:"Tourism",
        description:"Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1731058933/travel-to-world-sketch-road-trip-tourism-sketch-concept-with-landmarks-M4149X_bjuph2.jpg"
    },
    {
        id:6,
        title:"Job",
        description:"Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1731058107/google-news-flag-icon-u-s_e5mkpt.jpg"
    },
    {
        id:7,
        title:"Rental Service",
        description:"Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1731057822/car-icon-png-25_owzwcr.png"
    },
     {
        id:8,
        title:"Online Shop",
        description:"Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1729317267/shopping-cart-icon-isolated-on-white-background_zqasgs.jpg"
    },
 ]


class Services extends Component{
    state = {initialServices:servicesDetails}

render(){
    const {initialServices} = this.state
    // console.log(initialServices)
    return (
    <div>
        <h2 className='services-title'>Services</h2>
        <ul className="service-un-order-list">
        {initialServices.map(eachService => (
            <ServiceItem key={eachService.id} serviceDetails={eachService}/>
        ))}
        </ul>
    </div>
  )

}
  
}

export default Services