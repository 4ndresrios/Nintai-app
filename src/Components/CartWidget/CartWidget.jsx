import React, {useContext} from "react";
import cart from "../../CartWidget.svg";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {totalProducts} = useContext(CartContext);

    return (
        <Link to="/cart">
            <img className="cart" src={cart} alt="cart"/>
            <span>{totalProducts() || ""}</span>
        </Link>
    )
}

export default CartWidget