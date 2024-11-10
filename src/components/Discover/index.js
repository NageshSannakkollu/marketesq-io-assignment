import "./index.css"
const profileOneDetails = {
  name:"Arjun Raghav",
  ratingImageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1731046323/pngtree-five-star-rating-icon-png-image_4974126_pyoc0a.png",
  desc:"I am writing this after reflecting on my one month stay with Bricabin in Ladakh.Right from picking us up at the airport to dropping us back there after a month.Urgan was very responsible and took good takecare of my friends and me.Ladakh, India’s cold desert and land of rugged mountains crisscrossed by ancient passes, has stories buried deeper than those found in history books. Once a vibrant hub on the Silk Route, Ladakh connected markets stretching from Russia to eastern Europe. Today, the trade routes are quiet, but their stories remain, waiting to be told.",
  profileImageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1731045438/thinking-young-man-profile-bw-portrait-profiblack-white-glasses-profilele-35451484_niau22.jpg"
}

const profileTwoDetails = {

  name:"Anand Solanki",
  ratingImageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1731046323/pngtree-five-star-rating-icon-png-image_4974126_pyoc0a.png",
  desc:"I am writing this after reflecting on my one month stay with Bricabin in Ladakh.Right from picking us up at the airport to dropping us back there after a month.Urgan was very responsible and took good takecare of my friends and me.Ladakh, India’s cold desert and land of rugged mountains crisscrossed by ancient passes, has stories buried deeper than those found in history books. Once a vibrant hub on the Silk Route, Ladakh connected markets stretching from Russia to eastern Europe. Today, the trade routes are quiet, but their stories remain, waiting to be told.",
  profileImageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1731045438/thinking-young-man-profile-bw-portrait-profiblack-white-glasses-profilele-35451484_niau22.jpg",
  imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1731046713/Confluence_of_Indus_and_Zanskar_rivers_z4g5lv.jpg"  
}


const Discover = () => {
    
    const description = profileOneDetails.desc;
    const slicedDesc = description.slice(0,231)

  return (
     <div>
      <h2 className="discover-title">Discover</h2>
      <div className="discover-inside-container">
        <div className="sections-container">
          <div className="profile-image-name-container">
          <img src={profileOneDetails.profileImageUrl} alt="profile" className="profile-image"/>
            <div className="rating-name-container">
              <h3 className="profile-name">{profileOneDetails.name}</h3>
              <img src={profileOneDetails.ratingImageUrl} alt="rating" className="rating-image"/>
            </div>
          </div>
          <p>{slicedDesc} <span style={{color:"blue"}}>readmore</span></p>
        </div>
        <div className="section2-container"> 
        <img src={profileTwoDetails.imageUrl} alt="ladakh lake" className="lake-image"/>
            <div className="profile-image-name-container">
          <img src={profileOneDetails.profileImageUrl} alt="profile" className="profile-image"/>
            <div className="rating-name-container">
              <h3 className="profile-name">{profileTwoDetails.name}</h3>
              <img src={profileOneDetails.ratingImageUrl} alt="rating" className="rating-image"/>
            </div>
          </div>
          <p>{slicedDesc}<span style={{color:"blue"}}>readmore</span></p>
        </div>
        <div>
          <div className="sections-container">
            <div className="profile-image-name-container">
          <img src={profileOneDetails.profileImageUrl} alt="profile" className="profile-image"/>
            <div className="rating-name-container">
              <h3 className="profile-name">{profileOneDetails.name}</h3>
              <img src={profileOneDetails.ratingImageUrl} alt="rating" className="rating-image"/>
            </div>
          </div>
          <p>{slicedDesc}<span style={{color:"blue"}}>readmore</span></p>
          </div>
          <div className="sections-container">
           <div className="profile-image-name-container">
          <img src={profileOneDetails.profileImageUrl} alt="profile" className="profile-image"/>
            <div className="rating-name-container">
              <h3 className="profile-name">{profileOneDetails.name}</h3>
              <img src={profileOneDetails.ratingImageUrl} alt="rating" className="rating-image"/>
            </div>
          </div>
          <p>{slicedDesc}<span style={{color:"blue"}}>readmore</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover