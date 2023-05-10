import { Link } from "react-router-dom";

function Navbar() {
    return (
    <nav className="container">
        <ul>
            <li><strong>CookSomethingGood</strong></li>
            <li>
                <Link to={'/recipes'}>Recipes A-Z</Link>
            </li>
            <li>
                <Link to={'/categories'}>Categories</Link>
            </li>
            <li>
                <Link to={'/random'}>Random recipe!</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to={'/'}>Logout</Link>
            </li>
        </ul>
    </nav>
    );
}

export default Navbar;