import React, {useContext} from "react";
import {CartContext} from "../../context/CartContext";


const CartContainer = () => {
    const {productCartList, removeItem, cartClear} = useContext(CartContext);

    return(
        <div>
            {productCartList.map(item=>(
                <>
                    <p>{item.name} - {item.quantity}</p>
                    <button onClick={()=>removeItem(item.id)}>eliminar producto</button>
                </>
            ))}
            {<button onClick={()=>cartClear()}>Clear</button>}
        </div>
    )

}



export default CartContainer;