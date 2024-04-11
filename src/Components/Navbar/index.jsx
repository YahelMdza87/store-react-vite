import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/fornitures'>
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    yahel@prueba.com
                </li>
                <li>
                    <NavLink to='/my-orders'>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    carrito (0)
                </li>
            </ul>
        </nav>
    )
}

export default Navbar