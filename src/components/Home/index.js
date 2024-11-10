import { Component } from "react"
import {Navigate} from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import Discover from "../Discover"
import Services from "../Services"
import "./index.css"
import "./index.css"
import BookingContext from "../../context/BookingContext"

class Home extends Component{
  state = {startDate:"",
            endDate:"",
            bookings:[],
            initialRooms:1,
            clickOnSubmit:false
        }
  changeStartDate = event =>{
    this.setState({startDate:event.target.value})
  }

  changeLastDate = event =>{
    this.setState({endDate:event.target.value})
  }

  decreaseRooms = () => {
    const {initialRooms} = this.state
    if(initialRooms > 1){
      this.setState(prevState => ({initialRooms:prevState.initialRooms - 1}))
    }
  }

  increaseRooms = () => {
    this.setState(prevState => ({initialRooms:prevState.initialRooms+1}))
  }

  initialFormDetails = () => (
    <BookingContext.Consumer>
      {value => {
        const {addToBookingList} = value
         const {startDate,endDate,initialRooms} = this.state
    const onSubmitBookingRoom = event => {
      event.preventDefault()
     
      const bookingDetails = {startDate,endDate,initialRooms}
      addToBookingList({bookingDetails})
      this.setState({clickOnSubmit:true})
  }
      return(
         <form className="book-place-container" onSubmit={onSubmitBookingRoom}>
          <div className="room-inside-container">
            <p>CHECK-IN</p>
            <input type="date" className="date-input" onChange={this.changeStartDate} required/>
          </div>
          <hr className="hr-line"/>
           <div className="room-inside-container">
            <p>CHECK-OUT</p>
            <input type="date" className="date-input" onChange={this.changeLastDate} required/>
          </div>
           <hr className="hr-line"/>
           <div className="room-inside-container">
            <p>ROOMS</p>
            <div className="rooms-container">
              <button type="button" className="rooms-increase-decrease" onClick={this.decreaseRooms}>-</button>
              <p>{initialRooms}</p>
               <button type="button" className="rooms-increase-decrease" onClick={this.increaseRooms}>+</button>
            </div>
          </div>
          <div className="room-inside-container" >
              <button type="submit" className="book-button">Book</button>      
          </div>
        </form>
      )
      }}
    </BookingContext.Consumer>
  )
  render(){ 
    const {clickOnSubmit} = this.state
  return (
      <div className="main-home-container">
      <Header/>
      <div className="home-booking-container">
      <div className="city-home-page-container">
        <div className="home-ladakh-container">
          <h1 className="work-from-ladakh-title">Work from <br/>ladakh</h1>
          <p>India's first true digital tourism ecosystem</p>
            <ul className="social-media-list-container">
              <li className="social-media-item">
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729327911/6b93070272b75e9982142098a3f6d248_gcvecz.png" alt="facebook" className="social-media-image" />
              </li>
              <li className="social-media-item">
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729327928/7f493eeb470e8de670f38cfd96f7f380_npveyt.png" alt="instagram" className="social-media-image" />
              </li>
            </ul>
        </div>
        <div className="work-from-ladakh-container">
          <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1731038816/City-of-Leh_sbeoud.jpg" alt="ladakh" className="ladakh-image"/>
          </div>
        </div>
        {this.initialFormDetails()}
    </div>
    <div className="discover-home-container"><Discover/></div>
      <Services/>
    <Footer/>
    {clickOnSubmit && <Navigate to="https://marketesq-io-assignment-gamma.vercel.app/booking" state={clickOnSubmit} replace={true} />}
  </div>
)
  }
}
  
export default Home
