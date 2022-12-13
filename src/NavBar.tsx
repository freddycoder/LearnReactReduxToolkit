import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/document">Documents</Link></li>
            </ul>
        </nav>
    )
}