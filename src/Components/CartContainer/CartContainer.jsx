import React, {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";


const CartContainer = () => {
    const {productCartList, totalPrice, cartClear} = useContext(CartContext);

    if (productCartList.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to="/">Hacer compras</Link>
            </>
        )
    }

    return(
        <div>
            {productCartList.map(item=>(
                <>
                    {productCartList.map(product => <ItemCart key={product.id} product={product} />)}
                </>
            ))}
            <p>Total: ${totalPrice()}</p>
            {<button onClick={()=>cartClear()}>Clear</button>}
        </div>
    )

}



export default CartContainer;