import { Link } from "react-router-dom"
import "./index.css"
const Header = () => (
    <nav className="nav-header-container">
        <Link to="/" className="link-item"><h4>Brisphere</h4></Link>
        <ul className="nav-header-links">
            <li>Discover</li>
            <li>Services</li>
            <li>About Us</li>
        </ul>
    </nav>
)

export default Header
