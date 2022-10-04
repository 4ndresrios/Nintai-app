import React, {useState} from "react";

export const CartContext = React.createContext();

const CartProvider = ({children}) =>{
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (id) =>{
        const productExist = productCartList.some(item=>item.id === id);
        return productExist;
    }

    const totalPrice = () => {
        return productCartList.reduce((prev, act)=> prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => productCartList.reduce ((acumulador, productoActual)=> acumulador + productoActual.quantity, 0);

    const addItem = (item, quantity)=>{
        const newProduct ={
            ...item,
            quantity
        }
        if (isInCart(item.id)) {
            const productPos = productCartList.findIndex(product=>product.id === item.id);
            const newArreglo = [...productCartList];
            newArreglo[productPos].quantity = newArreglo[productPos].quantity + quantity;
            newArreglo[productPos].quantityPrice = newArreglo[productPos].quantity * newArreglo[productPos].price;
            setProductCartList(newArreglo);
        } else {
            const newArreglo = [...productCartList];
            newProduct.quantityPrice = newProduct.quantity * newProduct.price;
            newArreglo.push(newProduct);
            setProductCartList(newArreglo);
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
        <CartContext.Provider value={{
            productCartList, 
            addItem, 
            removeItem, 
            cartClear, 
            totalProducts, 
            totalPrice,
            productCartList,
            isInCart,
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
