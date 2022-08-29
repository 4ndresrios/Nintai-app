import cart from "../../CartWidget.svg";
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <img className="cart" src={cart} alt="cart"/>
    )
}

export default CartWidget