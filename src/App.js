import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Component } from "react"
import BookingContext from "./context/BookingContext"

import Home from "./components/Home"
import Booking from "./components/Booking"
import OrderConfirm from "./components/OrderConfirm"
import "./App.css"

class App extends Component{
  state = {bookingList:[],userDetailsList:[]}

  addToBookingList = booking => {
    this.setState({bookingList:booking})
  }

  addToUserDetails = user => {
    this.setState({userDetailsList:user})
  }

  render(){
    const {bookingList,userDetailsList} = this.state
    return (
      <BookingContext.Provider 
        value={{
          bookingList,
          userDetailsList,
          addToBookingList:this.addToBookingList,
          addToUserDetails:this.addToUserDetails
        }}
        >
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/booking" element={<Booking/>}/>
              <Route exact path="/confirmation" element={<OrderConfirm/>}/>
        </Routes>
      </BrowserRouter>
    </BookingContext.Provider>
    )
  }
}


export default App