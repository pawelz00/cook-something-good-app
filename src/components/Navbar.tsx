import { Link, NavLink } from "react-router-dom";

function Navbar() {

    return (
    <nav className="container">
        <ul>
            <li><Link className="app-name-navbar" to={'.'}>CookSomethingGood</Link></li>
            <li>
                <NavLink className={({isActive}) => isActive ? "navbar-focus" : undefined} to={'recipes'}>Recipes A-Z</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "navbar-focus" : undefined} to={'categories'}>Categories</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "navbar-focus" : undefined} to={'random'}>Random recipe!</NavLink>
            </li>
        </ul>
        {/* <ul>
            <li>
                <NavLink to={'/'}>Logout</NavLink>
            </li>
        </ul> */}
    </nav>
    );
}

export default Navbar;