import cart from "../../CartWidget.svg";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <Link to="/cart">
            <img className="cart" src={cart} alt="cart"/>
        </Link>
    )
}

export default CartWidget