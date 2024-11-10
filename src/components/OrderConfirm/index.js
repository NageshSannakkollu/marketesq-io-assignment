import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from "../Footer"
import BookingContext from '../../context/BookingContext'
import "./index.css"


 const OrderConfirm =() => (
    <BookingContext.Consumer>
        {value => {
            const {bookingList,userDetailsList} = value
            const{startDate,endDate,initialRooms} = bookingList
            const {username,email,contact,adult,child} = userDetailsList
            
            const finalRooms = initialRooms === undefined? 1:initialRooms
            console.log(initialRooms)
            const totalAmount = finalRooms*12430
            const getFormattedEndDate = newDate =>{
            newDate = newDate === "" ? new Date():new Date(newDate)
    // console.log(newDate)
            const day = newDate.getDate()
    // console.log(day)
            const month = newDate.getMonth()
            const year = newDate.getFullYear()
            const finalDate = new Date(year,month-1,day);
            const options = {day:'numeric',month:'short',year:'numeric'};
            const formattedDate = finalDate.toLocaleDateString('en-GB',options)
            return formattedDate
        }
        
        return (
            <div className='bookings-main-container'>
            <Header/>
            <div className='form-main-container'>
                <form className='booking-form-container'>
                    <div className='order-user-confirm-details-container'>
                        <div className='user-details-container'>
                            <h3>Mr/Mrs.{username}</h3>
                            <p>+91-{contact}</p>
                            <p>{email}</p>
                            <p>{adult} Adults and {child} Child</p>
                        </div>
                    <div className='success-order-payment-details-container'>
                        <div>
                        <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1731158087/success-icon-2048x2048-8woikx05_yenjsn.png" alt="success" className='success-image'/>
                        </div> 
                        <div className='order-complete-contact-container'>
                        <h2>Order Complete</h2>
                        <p>Have a questions?</p>
                        <Link href="#" className='contact-us'>Contact us</Link>
                       </div> 
                    </div>
                    </div>
                    <div className='confirmation-details-container order-confirm-page'>
                        <div className='confirmation-inside-container'>
                            <p>CHECK-IN</p>
                            <p>{getFormattedEndDate(startDate)}</p>
                        </div>
                        <hr className='horizon-line'/>
                        <div className='confirmation-inside-container'> 
                            <p>CHECK-OUT</p>
                            <p>{getFormattedEndDate(endDate)}</p>
                        </div>
                        <hr className='horizon-line'/>
                        <div className='confirmation-inside-container'>
                            <p>ROOMS</p>
                            <p className='rooms'>{finalRooms}</p>
                        </div>
                        <div className='arrow-button-container'>
                            <p className='total-amount'>₹ {totalAmount}</p>
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
        )
        }}
    </BookingContext.Consumer>
 )

export default OrderConfirm