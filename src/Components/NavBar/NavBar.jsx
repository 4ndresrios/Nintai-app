import logo from "../../logo.svg";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <div className="navbar-conteiner">
            <div>
                <img width={"150px"} src={logo} alt="logo" />
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
           
            <div className="buttonZone">
                <CartWidget/>
                <button className="button">Login</button>
            </div>
        </div>
    )
}

export default NavBar