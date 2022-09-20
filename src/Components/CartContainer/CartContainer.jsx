import React, {useContext} from "react";
import {CartContext} from "../../context/CartContext";


const CartContainer = () => {
    const {productCartList, removeItem} = useContext(CartContext);

    return(
        <div>
            {productCartList.map(item=>(
                <>
                    <p>{item.name} - {item.quantity}</p>
                    <button onClick={()=>removeItem(item.id)}>eliminar producto</button>
                </>
            ))}
        </div>
    )

}

export default CartContainer;