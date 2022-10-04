import React, {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";
import {db} from "../../utils/ItemCollection";
import {collection, addDoc} from "firebase/firestore";
import { useState } from "react";
import "./CartContainer.css"


const CartContainer = () => {
    const {productCartList, totalPrice, cartClear} = useContext(CartContext);
    const [idOrder, setIdOrder] = useState("");

    if (productCartList.length === 0) {
        return (
            <>
                {idOrder ? 
                <>
                <p>Su orden fue creada con el codigo: {idOrder}</p>
                <p>No hay elementos en el carrito</p>
                <Link to="/" onClick={()=>cartClear()}>Hacer compras</Link>
                </>
                :
                <div>
                    <p>No hay elementos en el carrito</p>
                    <Link to="/" onClick={()=>cartClear()}>Hacer compras</Link>
                </div>
                }
            </>
        )
    }

    const sendOrder = (event)=>{
        event.preventDefault();
        const order = {
            buyer:{
                name: event.target[0].value,
                phone: event.target[1].value,
                email: event.target[2].value,
            },
            items: productCartList,
            total: totalPrice()
        }
        const queryRef = collection(db, "orders");
        addDoc(queryRef, order).then(response=>{
            setIdOrder(response.id);
            cartClear();
        });
    }

    return(
        <div className="Conteiner">
            <div className="interConteiner">
                <div className="Conteiner">
                    {productCartList.map(product => <ItemCart key={product.id} product={product} />)}
                </div>
                <form className="formConteiner" onSubmit={sendOrder}>
                    <label>Nombre: </label>
                    <input type="text"/>
                    <label>Telefono: </label>
                    <input type="number"/>
                    <label>Correo: </label>
                    <input type="email"/>
                    <button className="buttonAgregar" type="submit">Enviar orden</button>
                </form>
            </div>
            <p>Total: ${totalPrice()}</p>
            {<button className="buttonAgregar" onClick={()=>cartClear()}>Limpiar Carrito</button>}
            
        </div>
    )

}



export default CartContainer;