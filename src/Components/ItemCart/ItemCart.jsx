import React, {useContext} from "react";
import "./ItemCart.css";
import {CartContext} from "../../context/CartContext";

const ItemCart = ({product}) => {

    const {removeItem} = useContext(CartContext);

    return (
        <div className="itemCart">
            <img src={product.image} alt={product.title}/>
            <div>
                <p>Título: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u.: {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={()=>removeItem(product.id)}>eliminar producto</button>
            </div>

        </div>
    )
}


export default ItemCart