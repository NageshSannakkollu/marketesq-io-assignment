
import "./index.css"

const ServiceItem = (props) => {
    const {serviceDetails} = props
    const {title,description,imageUrl} = serviceDetails 

  return (
    <li className="service-item">
    <img src={imageUrl} alt={title} className='services-image'/>
        <h3 className="service-title">{title}</h3>
        <p className="description">{description}</p>
    </li>
  )
}

export default ServiceItem