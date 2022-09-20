import React, {useState} from "react";

export const CartContext = React.createContext();

const CartProvider = ({children}) =>{
    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item, quantity)=>{
        const newProduct ={
            ...item,
            quantity
        }
        const newArreglo = [...productCartList];
        newArreglo.push(newProduct);
        setProductCartList(newArreglo);
    }

    const removeItem=(itemId)=>{
        console.log("itemID", itemId)
    }
    return(
        <CartContext.Provider value={{productCartList, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
