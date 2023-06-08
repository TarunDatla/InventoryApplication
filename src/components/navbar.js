import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">INVENTORYEASE4U</a>
        <ul>
            <li>
                 <Link to="/">Home</Link>
            </li>
            <li> 
                <Link to="/newproduct">New Products</Link>
            </li>
             <li> 
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
}
