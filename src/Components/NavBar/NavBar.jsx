import logo from "../../logo.svg";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="navbar-conteiner">
            <div>
                <Link to="/">
                    <img width={"150px"} src={logo} alt="logo" />
                </Link>
            </div>
            <div className="menu">
                <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/productos/Papeles">Pepeles</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/productos/Deco">Deco</NavLink>
            </div>
           
            <div className="buttonZone">
                <CartWidget/>
                <button className="button">Login</button>
            </div>
        </div>
    )
}

export default NavBar