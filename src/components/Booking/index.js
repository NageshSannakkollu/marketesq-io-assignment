import React, { Component } from 'react'
import Header from '../Header'
import BookingFooter from "../BookingFooter"
import { Navigate} from 'react-router-dom'
import BookingContext from '../../context/BookingContext'

import "./index.css"

class Booking extends Component{
    state ={bookings:[],username:"",email:'',contact: "",adult:0,child:0,
            startDate:"",endDate:"",initialRooms:1,clickOnPayment:false}

    changeInUsername=e=>{
        this.setState({username:e.target.value})
    }
    changeInEmail=e=>{
        this.setState({email:e.target.value})
    }
    changeInContact=e=>{
        const {contact} =this.state 
        if(contact.length >=10 && contact.length < 9){
            alert("Not valid number")
        }
        this.setState({contact:e.target.value})
    }
    changeInAdults =e => {
        this.setState({adult:e.target.value})
    }
    changeInChild = e =>{
        this.setState({child:e.target.value})
    }
    changeStartDate = e =>{
        this.setState({startDate:e.target.value})
    }
    changeEndDate = e => {
        this.setState({endDate:e.target.value})
    }

    increaseRooms = () => {
        this.setState(prevState => ({initialRooms:prevState.initialRooms + 1}))
    }

    decreaseRooms = () => {
        const {initialRooms} = this.state
        if(initialRooms > 1){
            this.setState(prevState => ({initialRooms:prevState.initialRooms - 1}))
        }
    }

    submitUserDetailsAndPayment = () => (
        <BookingContext.Consumer>
            {value => {
                const {addToUserDetails,addToBookingList} = value
                const {username,email,contact,adult,child,startDate,endDate,initialRooms} = this.state
                const onSubmitBooking = e => {  
                    e.preventDefault()
                    const userDetails = {username,email,contact,adult,child}
                    addToUserDetails(userDetails)
                    const bookingInfo = {startDate,endDate,initialRooms}
                    addToBookingList(bookingInfo)
                    this.setState({clickOnPayment:true})
                }
                const roomValue = 12430 * initialRooms
                return(
                     <div className='form-main-container'>
                    <form className='booking-form-container' onSubmit={onSubmitBooking}>
                    <div className='username-email-container'>
                        <input type='text' placeholder='Enter your name...' className='input-form' onChange={this.changeInUsername} required/>
                        <input type='email' placeholder='Enter your email...' className='input-form' onChange={this.changeInEmail} required/>
                    </div>
                    <div className='username-email-container'>
                        <input type='text' placeholder='Enter Contact number...' className='input-form phone-number' onChange={this.changeInContact}/>
                        <div className='adults-child-container'>
                        <div className='adults-container'>
                            <input type='number' className='child' onChange={this.changeInAdults} required/>
                            <p>Adults</p>
                        </div>
                        <div className='adults-container'> 
                            <input type='number' className='child' onChange={this.changeInChild} required />
                            <p>Childrens</p>
                        </div>
                        </div>
                    </div>
                    <div className='confirmation-details-container'>
                        <div className='confirmation-inside-container'>
                            <p>CHECK-IN</p>
                            <input type='date' value={startDate} onChange={this.changeStartDate}  required/>
                        </div>
                        <hr className='horizon-line'/>
                        <div className='confirmation-inside-container'> 
                            <p>CHECK-OUT</p>
                            <input type='date' value={endDate} onChange={this.changeEndDate} required/>
                        </div>
                        <hr className='horizon-line'/>
                        <div className='confirmation-inside-container'>
                            <p>ROOMS</p>
                            <div className='room-details-container'>
                                <button type="button" className='rooms-increase-decrease-button' onClick={this.decreaseRooms}>-</button>
                                <p>{initialRooms}</p>
                                <button type="button" className='rooms-increase-decrease-button' onClick={this.increaseRooms}>+</button>
                            </div>
                        </div>
                        <div className='click-payment-confirmation-container'>
                        <div className='arrow-button-container'>
                            <button className='confirm-button'>₹{roomValue}</button>
                            <button type="submit" className='arrow-image-container'>
                                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1731150748/arrow-right-small-icon-2048x1365-cmy5bz89_t1atf5.png"  
                                    className='arrow-image'
                                    alt='right arrow'
                                    />
                            </button>
                            </div>
                            <p className='pay-amount-desc'>click to pay token amount</p>
                        </div>
                    </div>
                </form>
                </div>
                )
            }}
       </BookingContext.Consumer>
    )

    render(){
        const {clickOnPayment} = this.state
        return (
            <div className='bookings-main-container'>
            <Header/>
            {this.submitUserDetailsAndPayment()}
            <BookingFooter/>
            {clickOnPayment && <Navigate to="https://marketesq-io-assignment-gamma.vercel.app/confirmation" state={clickOnPayment} replace={true} />}
        </div>
        )
    }
  
}

export default Booking
