import React, {useState} from "react";

export const CartContext = React.createContext();

const CartProvider = ({children}) =>{
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (id) => productCartList.find(product => product.id === id) ? true : false;

    const addItem = (item, quantity)=>{
        if (isInCart(item.id)) {
            setProductCartList(productCartList.map(product=>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }))
        } else {
            setProductCartList([...productCartList, {...item,quantity}])
        }
    }

    const removeItem=(itemId)=>{
        const newArreglo = productCartList.filter(product=>product.id !== itemId);
        setProductCartList(newArreglo)
    }

    const cartClear =(itemId)=>{
        const newArreglo = productCartList.filter(product=>product.id = itemId);
        setProductCartList(newArreglo)
    }


    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, cartClear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
