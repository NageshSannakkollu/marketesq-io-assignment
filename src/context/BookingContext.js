import React from "react"

const BookingContext = React.createContext({
    bookingList:[],
    userDetailsList:[],
    addToBookingList:() =>{},
    addToUserDetails:() => {}
})

export default BookingContext